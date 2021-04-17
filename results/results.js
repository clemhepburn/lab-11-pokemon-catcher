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



var ctx = document.getElementById('myChart').getContext('2d');

const pokeNames = [];
const pokeCaptured = [];
const pokeEncountered = [];

for (let pokemon of pokedex) {
    pokeNames.push(pokemon.id);
    pokeCaptured.push(pokemon.captured);
    pokeEncountered.push(pokemon.encountered);
}

var myChart = new Chart(ctx, { //eslint-disable-line
    type: 'bar',
    data: {
        labels: pokeNames,
        datasets: [
            {
                label: 'Pokemon Captured',
                data:  pokeCaptured,
                backgroundColor: 'cornflowerblue',
                borderColor: 'thistle',
                borderWidth: 1
            },
            {
                label: 'Pokemon Encountered',
                data:  pokeEncountered,
                backgroundColor: 'thistle',
                borderColor: 'cornflowerblue',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});