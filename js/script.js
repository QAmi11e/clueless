//State
let tops;
//Function calls + Definitions
fetchTops();

async function fetchTops(){
    const response = await fetch("http://localhost:3000/tops");
    tops = await response.json();
    console.log(tops);
}