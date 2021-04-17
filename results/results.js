import pokeData from '../data.js';
import { getPokedex, clearGame } from '../local-storage-utils.js';
import { findByPokemonName, findByID } from '../utils.js';
import { createTableRow } from './results-utils.js';

const pokedex = getPokedex();

const names = [];
const captured = [];
const encountered = [];

for (let pokemon of pokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}

const table = document.querySelector('.pokemon-table');
const clearButton = document.querySelector('.clear-button');
const printButton = document.getElementById('print-button');

for (let pokeItem of pokedex) {
    const trOfPoke = createTableRow(pokeItem);
    table.append(trOfPoke);
}

clearButton.addEventListener('click', () => {
    clearGame();
    window.location = '../index.html';
});

printButton.addEventListener('click', () => {
    window.print();
});