console.log("\n*********** EJERCICIO 2 ***********"); 
async function  buscaPokemon(pokemon) {
    const url = ("https://pokeapi.co/api/v2/pokemon/" + pokemon).toLowerCase();
    const responseApi = await fetch(url);
    if(! responseApi.ok) {
        console.log(`\nEstado solicitud: ${responseApi.status} - ${responseApi.statusText}`);
        return null;
    }  
    return await responseApi.json();  
}

async function pruebaPokemon(pokemon){
    const datosPokemon = await buscaPokemon(pokemon);
    if (datosPokemon === null){
        console.log("\nPokemon no encontrado")
    } else {
        console.log(`\nNombre pokemon: ${datosPokemon.name} \nId: ${datosPokemon.id}`);
    }     
}

pruebaPokemon("charmander");
pruebaPokemon("Mewtwo");
pruebaPokemon("piKachu");


