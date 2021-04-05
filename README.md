## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


HTML Setup
1. radio buttons for pokemon (same name for exclusive selection)
2. button to 'catch' the pokemon

State
- caught for each pokemon
- encounters for each pokemon
    ```js
    - const pokedex = []
    ```


Events
- onClick
    - send the selected ('caught') pokemon to the pokedex
        - figure out which one is selected
        - capture pokemon
    - ++ captures state
    - check captures state
        - if 10, redirect
        - otherwise generate more pokemon
- onLoad
    - generate pokemon

Functions
- generateThreePokemon
    - start with array of pokemon data
    - Math.random() to get 3 random array indexes
        - assure they're unique
            - WHILE they're not unique, get three more random indexes (while loop)
    - use the three indexes to get three pokemon
    - ++ encountered property for all 
        - "is it in the pokedex yet? if not, add. if it is, encountered property is incremented 
    -put em in the DOM

- local storage utils
    - getPokedex
    -encounteredPokemon
    -capturePokemon

- capturePokemon(selectedPokemon)
    - grab pokedex from local storage 
    - increment captured property for just the selected one
        

