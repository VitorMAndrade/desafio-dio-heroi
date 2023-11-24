

let nome = "vitor";
let numeroAleatorio = Math.floor(Math.random() * 10000);


function darXP (){
    if(numeroAleatorio <= 1000){
        console.log("Ferro!")
    }else if(numeroAleatorio <= 2000 ){
        console.log("Bronze")
    }else if(numeroAleatorio <= 5000){
       console.log("Prata") 
    }else if(numeroAleatorio <= 7000){
        console.log("Ouro")
    }else if(numeroAleatorio <= 8000){
        console.log("Platina")
    }else if(numeroAleatorio <= 9000){
        console.log("Ascendente")
    }else if(numeroAleatorio <= 10000){
        console.log("Imortal")
    }else{
        console.log("radiante")
    }
}

console.log(`Parabéns ${nome}, você é ${darXP} e sua XP é ${numeroAleatorio}`)