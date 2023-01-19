// typer.js
let i = 0;
const text = document.querySelector('#type');
text.innerHTML='';
let someText ='Created by Somto Ede Femi Demilade';
function loop(){
   
    if (i < someText.length){

        text.innerHTML+=someText.charAt(i);
        i++;    
        
    }
    else{
        text.innerHTML ='';
        i = 0;
    }
   

}
setInterval(loop, 100);
