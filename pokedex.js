let datosPokemon = null;

async function  buscaPokemon(pokemon) {
    const url = ("https://pokeapi.co/api/v2/pokemon/" + pokemon).toLowerCase();
    const responseApi = await fetch(url);
    if(! responseApi.ok) {
        console.log(`Estado solicitud: ${responseApi.status} - ${responseApi.statusText}`);
        return null;
    }  
    return await responseApi.json();  
}

async function guardaPokemon(pokemon){
    console.log("\n*********** EJERCICIO 2 ***********"); 
    datosPokemon = await buscaPokemon(pokemon);
    if (datosPokemon === null){
        console.log("Pokemon no encontrado")
    } else {
        console.log(`\nNombre pokemon: ${datosPokemon.name} \nId: ${datosPokemon.id}`);
        await mostrarFicha(datosPokemon)
    }     
}

async function mostrarFicha(datosPokemon) {
    console.log("\n\n*********** EJERCICIO 3 ***********");
    if (datosPokemon === null){
        console.log("No hay nada para mostrar");
        return;
    } 
    
    
    
}
guardaPokemon("pikachu");
//mostrarFicha();
