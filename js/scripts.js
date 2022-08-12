alert('Bem Vindo ao site Game Mania');
console.log('Mensagem enviada pelo console');

let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 3500)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}