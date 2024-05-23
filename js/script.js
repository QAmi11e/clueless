//--------------------------------------------------------------- State ---------
// ----- TOPS SETUP
let tops;
let topId;
let oneTop;
let topRes;
let topSelectEl = document.getElementById("topSelect");
let topImageDivEl = document.querySelector(".topImage");
const topBtnEl = document.getElementById("topBtn");

// ----- BOTTOMS SETUP
let bottoms;
let bottomsId;
let oneBottom;
let bottomRes;
let bottomSelectEl = document.getElementById("bottomSelect");
let bottomImageDiv = document.querySelector(".bottomImage");
const bottomBtn = document.getElementById("bottomBtn");

//----- OTHER BUTTONS
const clearBtn = document.getElementById("clearBtn");



//--------------------------------------------------- Function calls + Definitions -------------------------------

fetchTops(); //gets all the tops for the select + adds to the existing dropdown in the HTML
async function fetchTops(){
    const response = await fetch("http://localhost:3000/tops");
    tops = await response.json();
    tops.forEach(top => {
        topSelectEl.innerHTML += `<option value = ${top.id} >${top.name}</option>`;
    });
}//end of FetchTops


fetchBottoms(); //gets all the tops for the select + adds to the existing dropdown in the HTML
async function fetchBottoms(){
    const response = await fetch("http://localhost:3000/bottoms");
    bottoms = await response.json();
    bottoms.forEach(bottom => {
        bottomSelectEl.innerHTML += `<option value = ${bottom.id} >${bottom.name}</option>`;
    });
}//end of FetchBottoms

async function submitNewOutfit(){
    
    const options ={
        method: "POST",
        body: oneBottom, oneTop,
    }
    const response = await fetch("http://localhost:3000/savedOutfits");
}



//--------------------------------------------------- Event Listeners -------------------------------

// > Tops ------------------------
topBtnEl.addEventListener("click", async function(){
    topRes = await fetch(`http://localhost:3000/tops/${topSelectEl.value}`); //cannot use /:id right now. idk why )-:
    oneTop = await topRes.json();
    let oneTopUrl = oneTop.url;
    topImageDivEl.innerHTML = `<img src=${oneTopUrl}>`; 
}); //end of topBtn


// > Bottoms ----------------------------
bottomBtn.addEventListener("click", async function(){
    bottomRes = await fetch(`http://localhost:3000/bottoms/${bottomSelectEl.value}`); //:id wHYYYYYYYYYYYY
    oneBottom = await bottomRes.json();
    let oneBottomUrl = oneBottom.url;
    bottomImageDiv.innerHTML = `<img src=${oneBottomUrl}>`;
}); //end of bottomBtn


// > Clear Button -----------------------------
clearBtn.addEventListener("click", async function(){
    const topImageDivImgEl = document.querySelector('.topImage img');
    const bottomImageDivImgEl = document.querySelector('.bottomImage img');
    if (bottomImageDivImgEl) {
      bottomImageDivImgEl.removeAttribute('src');
    }
    if(topImageDivImgEl){
        topImageDivImgEl.removeAttribute('src');
    }
  });

  // > Save Outfit Form -----------------------------
  document.querySelector("form").addEventListener("submit", function(evt){
    evt.preventDefault();
    submitNewOutfit();
  })












/* Scrapping this for now.
document.addEventListener('DOMContentLoaded', async function(event) {
    topSelectEl.addEventListener('change', (event) => {
        const selectedTop = event.target.value;
        console.log(`Selected value: ${selectedTop}`); 
    });
  });
  */

