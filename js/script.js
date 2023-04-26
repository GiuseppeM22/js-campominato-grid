//prendere id bottone, contenitore e quadrato

const contenitore = document.querySelector(".container")
const btn = document.getElementById("play")

// generare un evento click che crei una griglia da 1-100

btn.addEventListener("click", function(){
 for (let i = 1; i <= 100; i++) {
    const quadratoHtml = `<div class="square">${i}</div>`
    contenitore.innerHTML += quadratoHtml
 }

const quadrato = document.querySelectorAll(".square")
for (let i = 0; i < quadrato.length; i++) {
    const quadratoEl = quadrato[i];

    quadratoEl.addEventListener("click", function(){
       this.classList.toggle("clicked")
       console.log("Numero: ", quadratoEl.innerText)


   })
   
}
 


})

//la cella si colora di azzurro
// evento click sul quadrato nel quale andiamo a mettere in evidenza con
//toggle una classe clicked con background color azzurro
 

