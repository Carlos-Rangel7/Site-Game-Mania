alert('Bem Vindo ao site Game Mania');
console.log('Mensagem enviada pelo console');

const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosel(){
    idx++;
    
    if(idx > img.lenght - 1){
        idx = 0;
    }

    img.style.transform = `translateX(${-idx * 1345}px)`;

}

setInterval(carrossel, 1800);