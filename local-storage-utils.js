import { findByID } from './utils.js';

const POKEDEX = 'POKEDEX'; //this is a booger

export function getPokedex() {
    const stringPokedex = localStorage.getItem(POKEDEX);

    if (!stringPokedex) return [];

    const parsedPokedex = JSON.parse(stringPokedex);
    return parsedPokedex;
}

export function setPokedex(parsedPokedex) {
    const stringPokedex = JSON.stringify(parsedPokedex);

    localStorage.setItem(POKEDEX, stringPokedex);
}

    //take in a pokemon and get the pokedex. check if it is there 
export function encounterPokemon(pokemon) {

    const pokedex = getPokedex();

    const matchingPokedexItem = findByID(pokedex, pokemon.pokemon);

    if (matchingPokedexItem) {
        matchingPokedexItem.encountered++;
    } else {
        const newPokedexItem = {
            id: pokemon.pokemon,
            captured: 0,
            encountered: 1
        };

        pokedex.push(newPokedexItem);

        setPokedex(pokedex);

        return pokedex;
    }
}

//get the pokemon and pokedex, check if its there, increment encountered, increment captured 
export function capturePokemon(pokemon) {

    const pokedex = getPokedex();

    const matchingPokedexItem = findByID(pokedex, pokemon.pokemon);

    matchingPokedexItem.captured++;

    setPokedex(pokedex);

    return pokedex;

}