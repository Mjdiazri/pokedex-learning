console.log("\n*********** EJERCICIO 4 ***********"); 

async function  buscarPokemon(pokemon) {    
    const url = ("https://pokeapi.co/api/v2/pokemon/" + pokemon).toLowerCase();
    const responseApi = await fetch(url);
    if(! responseApi.ok) {
        console.log(`\nPokemon no encontrado \nEstado solicitud: ${responseApi.status} - ${responseApi.statusText}`);
        return null;
    }  
    return await responseApi.json();  
}


function obtenerStat(objeto, nombreStat){
    for(let i = 0; i < objeto.stats.length; i++ ){
        if(objeto.stats[i].stat["name"] === nombreStat){
            return objeto.stats[i].base_stat;
        } 
    } 
    return null;   
}

async function compararPokemon(pokemon1, pokemon2, stat) {
    const objetoPokemon1 = await buscarPokemon(pokemon1);
    const objetoPokemon2 = await buscarPokemon(pokemon2);
    if(objetoPokemon1 === null || objetoPokemon2 === null){
        console.log("No se puede realizar la comparacion");
        return;
    }
    const statPokemon1 = obtenerStat(objetoPokemon1, stat.toLowerCase());
    const statPokemon2 = obtenerStat(objetoPokemon2, stat.toLowerCase());

    if(statPokemon1 === null && statPokemon2 === null){
        let listaStats = [];
        for(let i = 0; i < objetoPokemon1.length; i++){
            if(! listaStats.includes(objetoPokemon1.stats[0].stat.name)){
                listaStats.push(objetoPokemon1.stats[0].stat.name)
            }        
        }
        for(let i = 0; i < objetoPokemon2.length; i++){
            if(! listaStats.includes(objetoPokemon2.stats[0].stat.name)){
                listaStats.push(objetoPokemon2.stats[0].stat.name)
            }
        }   
        console.log(`Stat no valida. Las stats validas son: ${listaStats.join()}`)
        return;
    }

    if(statPokemon1 < statPokemon2){
        console.log(`Puntaje ${pokemon1}: ${statPokemon1} \nPuntaje ${pokemon2}: ${statPokemon2} \nGanador: ${pokemon2}`)
    } else if (statPokemon1 == statPokemon2){
        console.log(`Puntaje ${pokemon1}: ${statPokemon1} \nPuntaje ${pokemon2}: ${statPokemon2} \nEmpate!!!!`)
    } else {
        console.log(`Puntaje ${pokemon1}: ${statPokemon1} \nPuntaje ${pokemon2}: ${statPokemon2} \nGanador: ${pokemon1}`)
    }
}

compararPokemon("snorlax", "machamp","special-defense")