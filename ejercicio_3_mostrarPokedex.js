console.log("\n*********** EJERCICIO 3 ***********"); 
const prompt = require("prompt-sync")();


function preguntaPokemon(){
    const userPokemon = prompt("Cual pokemon quieres buscar?");
    const pokemon = userPokemon.toLowerCase();
    return pokemon;
}

async function  buscarPokemon(pokemon) {    
    pokemon = preguntaPokemon();
    const url = ("https://pokeapi.co/api/v2/pokemon/" + pokemon).toLowerCase();
    const responseApi = await fetch(url);
    if(! responseApi.ok) {
        console.log(`\nPokemon no encontrado \nEstado solicitud: ${responseApi.status} - ${responseApi.statusText}`);
        return null;
    }  
    return await responseApi.json();  

}

async function mostrarFicha(objetoPokemon) {
    objetoPokemon = await buscarPokemon();
    if (objetoPokemon === null){
        console.log("No hay informacion para mostar");
        return;
    }
    let altura = (objetoPokemon.height * 10);
    let peso = (objetoPokemon.weight / 10);
    let listaTypes = [];    
    for(let i = 0; i < objetoPokemon.types.length; i++){
        listaTypes.push(objetoPokemon.types[i].type.name);
    }
 

    console.log(`\n\n---FICHA DEL POKEMON--- \n    ${objetoPokemon.id} ${objetoPokemon.name.toUpperCase()}    \n`);
    console.log(`Tipos: ${listaTypes.join(" / ")}`);
    console.log(`Altura: ${altura} cm`);
    console.log(`Peso: ${altura} kg`);
    console.log("Stats:") 
    for(let i = 0; i < objetoPokemon.stats.length; i++ ){        
        console.log(`* ${objetoPokemon.stats[i].stat.name} - ${objetoPokemon.stats[i].base_stat}`);
    }
    console.log("Habilidades:")
    for(let i = 0; i < objetoPokemon.abilities.length; i++ ){   
        if (objetoPokemon.abilities[i].is_hidden === true){
            console.log(`* ${objetoPokemon.abilities[i].ability.name} (Oculta)`);
        }else{
            console.log(`* ${objetoPokemon.abilities[i].ability.name}`);
        }            
    }
}

mostrarFicha();

