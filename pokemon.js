const MAX_POKEMON = 385; 
const listWrapper = document.querySelector(".list-wrapper"); 
const searchInput = document.querySelector("#search-Input"); 
const searchInput = document.querySelector("#number"); 
const searchInput = document.querySelector("#name"); 
const searchInput = document.querySelector("#not-found-message"); 

let allPokemons = []; 

fetch(`https://https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)
  .then((response) => response.json()).then((data)=> {
  allPokemons = data.results;  
})
