const box = document.querySelector('div');
function changeColor (){
    box.style.background !== "green" ? 
    box.style.background = "green" :
    box.style.background = "cornflowerblue"  
}
box.addEventListener('click', changeColor)

const img = document.querySelector('.hidden');
const btn = document.querySelector('button');

function hiddenHandler(){
    img.style.display = "initial" 
}
btn.addEventListener('click', hiddenHandler)

const body = document.querySelector("body");
const btnBody = document.querySelector(".btn")
function changeBodyColor(){
     body.style.background = 'grey'
 }

btnBody.addEventListener('click', changeBodyColor)

const input = document.querySelector('input[type="text"]')
function growHandler(event){
    const term = event.target.value;
    let currentWidth = 350 
    for(e in term){
        currentWidth += 50 
    }  
    return box.style.width = currentWidth + "px"
}

input.addEventListener('keyup', growHandler)

box.addEventListener('dragstart', function (){
    console.log('hola')
})

btn.addEventListener('click', changeImage)

function changeImage(){

    btn.innerText === "🔥" ?
    btn.innerText = "💦" :
    btn.innerText = "🔥"
}