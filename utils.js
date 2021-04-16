import pokeData from './data.js';


export function findByID(array, id) {
    return array.find(item => id === item.id);

}

export function findByPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}

//remember to ask dani about this syntax because I think I understand it but I wanna double check
