// import functions and grab DOM elements
import { generatePokemon } from './data-utils.js';
import { capturePokemon } from './local-storage-utils.js'; 
import { findByPokemonName } from './utils.js';



const button = document.querySelector('button');
let captured = 0;

// initialize state
function populateTheDom() {
    const pokeLabel1 = document.querySelector('#pokemon1-label');
    const pokeLabel2 = document.querySelector('#pokemon2-label');
    const pokeLabel3 = document.querySelector('#pokemon3-label');

    const pokeRadio1 = document.querySelector('#pokemon1-radio');
    const pokeRadio2 = document.querySelector('#pokemon2-radio');
    const pokeRadio3 = document.querySelector('#pokemon3-radio');

    const somePokemon = generatePokemon();

    const img1 = document.querySelector('#poke1-img');
    const img2 = document.querySelector('#poke2-img');
    const img3 = document.querySelector('#poke3-img');

    img1.src = somePokemon[0].url_image;
    pokeLabel1.append(img1);
    pokeRadio1.value = somePokemon[0].pokemon;

    img2.src = somePokemon[1].url_image;
    pokeLabel2.append(img2);
    pokeRadio2.value = somePokemon[1].pokemon;

    img3.src = somePokemon[2].url_image;
    pokeLabel3.append(img3);
    pokeRadio3.value = somePokemon[2].pokemon;


}



populateTheDom();

// set event listeners to update state and DOM

button.addEventListener('click', () => {
    const selectedRadioButton = document.querySelector('input:checked');

    const pokeThing = findByPokemonName(selectedRadioButton.value);
    capturePokemon(pokeThing);

    captured++;

    if (captured < 10) { 
        populateTheDom();
    } else {
        window.location = './results/results.html';
    }
});


