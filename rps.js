function npcChoice(){
    let npc = Math.floor(Math.random()*2)
    return npc;
}


function playerChoice(){
    let answer = prompt("Escoge entre piedra, papel o tijera");
    let respuesta = answer.toLowerCase()
    if (respuesta==='piedra'){
        return 0;
    }
    else if (respuesta==='papel'){
        return 1;
    }
    else if (respuesta==='tijera'){
        return 2;
    }
    else{
        console.log("La elección no es correcta. Vuelve a intentarlo.")
        return 3;
    }
}

function round(){
    let player = 3;
    do{
        player = playerChoice()
    } while (player===3)
    let bot = npcChoice()

    if (player === 0){
        if (bot === 1){
            console.log("Papel gana a Piedra: Has perdido!")
            return -1;  
        }
        else if (bot === 2){
            console.log("Piedra gana a Tijera: Has ganado!")
            return 1;
        }
        else {
            console.log("Empate!")
            return 0; 
        }
    }
    else if(player === 1){
        if (bot === 0){
            console.log("Papel gana a Piedra: Has ganado!")
            return 1;  
        }
        else if (bot === 2){
            console.log("Tijera gana a Papel: Has perdido!")
            return -1;
        }
        else {
            console.log("Empate!")
            return 0; 
        }
    }
    else if (player === 2){
        if (bot === 0){
            console.log("Piedra gana a Tijera: Has perdido!")
            return -1;  
        }
        else if (bot === 1){
            console.log("Tijera gana a Papel: Has ganado!")
            return 1;
        }
        else {
            console.log("Empate!")
            return 0; 
        }
    }
    
}
function game(){
    let cont=0
    for (let i=0;i<5;i++){
        let suma = round()
        cont = cont+suma;
    }
    if (cont>0){
        console.log("Has ganado al mejor de 5")
    }
    else if (cont<0){
        console.log("Has perdido al mejor de 5")
    }
    else{
        console.log("Has empatado al mejor de 5")
    }
}
console.log(game());