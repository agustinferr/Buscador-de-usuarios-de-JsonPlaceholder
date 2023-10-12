const api = 'https://jsonplaceholder.typicode.com/users';
const input = document.getElementById("nombre");
const btn = document.getElementById("btn");
const contenedor = document.getElementById("container");

let info = []
async function fetechin(){
    try{
        const request = await fetch(api)
        const response = request.ok
        const data = await request.json()        
        data.forEach(e => {                        
            info.push(e.name)            
        });
        console.log(info)
        cartas()
    }catch(error){
        console.log("Se ha producido un error: " + error.message);
    }
    
}


function cartas(){
    for (let i = 0; i < info.length; i++) {
const carta = `<div class="card">
<p>${info[i]}</p>
</div>`
contenedor.innerHTML += carta
}
}


document.addEventListener("DOMContentLoaded",function(){
fetechin()
})



function chequeo(palabra,array){
    for (let i = 0; i < array.length; i++){
        const corte = palabra.value.length
        const comparar = array[i].slice(0,corte)   
        if(comparar.toLowerCase() === input.value.toLowerCase()){
            const carta = `<div class="card">
            <p>${info[i]}</p>
            </div>`
            contenedor.innerHTML += carta}       
    }
    
}
function borrador(){
return new Promise((resolve, reject) => {contenedor.innerHTML = "";resolve();})

}

btn.addEventListener("click",function(){
  
    if(input.value.length !== 0){ 
        borrador()
     .then(chequeo(input,info)) }   
})