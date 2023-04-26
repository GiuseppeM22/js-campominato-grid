//prendere id bottone, contenitore e quadrato

const contenitore = document.querySelector(".container")
const quadrato = document.getElementById("square")
const btn = document.getElementById("play")

// generare un evento click che crei una griglia da 1-100

btn.addEventListener("click", function(){
 for (let i = 1; i <= 100; i++) {
    const quadratoHtml = `<div id="square">${i}</div>`
    contenitore.innerHTML += quadratoHtml
 }

})

//la cella si colora di azzurro
// evento click sul quadrato nel quale andiamo a mettere in evidenza con
//toggle una classe clicked con background color azzurro
 
quadrato.addEventListener("click", function(){
    this.classList.toggle("clicked")
})
