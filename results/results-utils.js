export function createTableRow(pokedexArrayItem) {
    const tr = document.createElement('tr');
    tr.classList.add('tr');
    const tdPokemonName = document.createElement('td');
    tdPokemonName.classList.add('td');
    const tdCaptured = document.createElement('td');
    tdCaptured.classList.add('td');
    const tdEncountered = document.createElement('td');
    tdEncountered.classList.add('td');

    tdPokemonName.textContent = pokedexArrayItem.id;
    tdCaptured.textContent = pokedexArrayItem.captured;
    tdEncountered.textContent = pokedexArrayItem.encountered;

    tr.append(tdPokemonName, tdCaptured, tdEncountered);

    return tr;
}