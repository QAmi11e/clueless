//--------------------------------------------------------------- State ---------
// ----- TOPS SETUP
let tops;
let topId;
let oneTop;
let topRes;
let topSelect = document.getElementById("topSelect");
let topImageDiv = document.querySelector(".topImage");
const topBtn = document.getElementById("topBtn");

// ----- BOTTOMS SETUP
let bottoms;
let bottomsId;
let oneBottom;
let bottomRes;
let bottomSelect = document.getElementById("bottomSelect");
let bottomImageDiv = document.querySelector(".bottomImage");
const bottomBtn = document.getElementById("bottomBtn");



//--------------------------------------------------- Function calls + Definitions

fetchTops(); //gets all the tops for the select + adds to the existing dropdown in the HTML
async function fetchTops(){
    const response = await fetch("http://localhost:3000/tops");
    let id = 0;
    tops = await response.json();
    tops.forEach(top => {
        topSelect.innerHTML += `<option value = ${top.name}, topId = ${id++} >${top.name}</option>`;
    });
}//end of FetchTops


fetchBottoms(); //gets all the tops for the select + adds to the existing dropdown in the HTML
async function fetchBottoms(){
    const response = await fetch("http://localhost:3000/bottoms");
    let id = 0;
    bottoms = await response.json();
    bottoms.forEach(bottom => {
        bottomSelect.innerHTML += `<option value = ${bottom.name}, bottomId = ${id++} >${bottom.name}</option>`;
    });
}//end of FetchBottoms

//------------------------- Event Listeners
// > Tops 
topBtn.addEventListener("click", async function(){
    //const topOption = topSelect.options[topSelect.selectedIndex];
    //console.log(id);
    console.log('THATS THAT')
    topRes = await fetch(`http://localhost:3000/tops/1`); //cannot use /:id right now. idk why )-:
    oneTop = await topRes.json();
    console.log(oneTop);
    let oneTopUrl = oneTop.url;
    topImageDiv.innerHTML = `<img src=${oneTopUrl}>`; 
});


// > Bottoms
bottomBtn.addEventListener("click", async function(){
    bottomRes = await fetch(`http://localhost:3000/bottoms/1`); //:id wHYYYYYYYYYYYY
    oneBottom = await bottomRes.json();
    console.log(oneBottom);
    let oneBottomUrl = oneBottom.url;
    bottomImageDiv.innerHTML = `<img src=${oneBottomUrl}>`;
});

/* Scrapping this for now.
document.addEventListener('DOMContentLoaded', async function(event) {
    topSelect.addEventListener('change', (event) => {
        const selectedTop = event.target.value;
        console.log(`Selected value: ${selectedTop}`); 
    });
  });
  */

