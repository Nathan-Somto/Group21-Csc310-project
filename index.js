// typer.js

const text = document.querySelector('#type');
text.innerHTML='';
let someText ='Somto Femi Ede';
function loop(){
    var i = 0;
    if (i < someText.length){
        console.log(i);
       /*  if(someText.charAt(i) === ' '){
            text.innerHTML='';
            i++;
            continue;
        }  */
       
    
       setTimeout( text.innerHTML+=someText.charAt(i), 200);
        i++;    
        
    }
   

}
loop();
