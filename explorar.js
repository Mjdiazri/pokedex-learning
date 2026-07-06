const prompt = require("prompt-sync")();

async function buscaPokemon() {
    const userPokemon = prompt("Cual pokemon quieres buscar?").toLowerCase();
    const respuestaApi = await fetch ("https://pokeapi.co/api/v2/pokemon/" + userPokemon);
    if (!respuestaApi.ok) {
    console.log("No se pudo consultar el pokemon. Código:", respuestaApi.status);
    return;
    }
    const datosPokemon = await respuestaApi.json();
    const datos = respuestaApi.json


    console.log("\n*********** PRELIMINARES ***********")
    console.log(`Estado respuesta: ${respuestaApi.status} ${respuestaApi.statusText} `)
    //console.log(datosPokemon);  


    console.log("\n\n\n\n*********** EJERCICIO 1 ***********");    
    console.log(`\nTipo de pokemon para ${userPokemon}:`)
    for(let i = 0; i < datosPokemon.types.length; i++ ){
        console.log(`* ${datosPokemon.types[i].type.name}`);
    }
    console.log("\nStats:") 
    for(let i = 0; i < datosPokemon.stats.length; i++ ){        
        console.log(`* ${datosPokemon.stats[i].stat.name} - ${datosPokemon.stats[i].base_stat}`);
    }
    console.log("\nHabilidades:")
    for(let i = 0; i < datosPokemon.abilities.length; i++ ){        
        console.log(`* ${datosPokemon.abilities[i].ability.name}`);
    }
    
}

buscaPokemon();