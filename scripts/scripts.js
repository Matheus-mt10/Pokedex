const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function converPokemonToLi(pokemon) {
    return `

        <li class="pokemon">
            <span class="number"><strong>#001</strong></span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">

                <ul class="types">
                    <li class="type">Grass</li>
                    <li class="type">Poison</li>
                </ul>

                <img src="images/bulbaR.gif" alt="${pokemon.name}">

            </div>
               
        </li>
    `
}


const pokemonList = window.document.getElementById('pokemonList');




fetch(url)
.then(function (response) {
    response.json();
}
.then(function (jsonBody){
    console.log(jsonBody);
})
.then(function(pokemons) {
    
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += converPokemonToLi(pokemon);
    }

})
.catch(function (error) {
    console.log(error)
})

)

