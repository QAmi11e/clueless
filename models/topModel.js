const topsArray = [
    {
        id: 0,
        name: "None",
        url: ""
    },
    { 
        id: 1,
        name: "Android",
        url: "https://i.imgur.com/sIgZ5a4.png"
    },

    { 
        id: 2,
        name: "Teal?",
        url: "https://i.imgur.com/toEcNfH.png"
    },

    { 
        id: 3,
        name: "Software Developer Zip Up Hoodie",
        url: "https://i.imgur.com/pR8eB9h.png"
    }
];

module.exports = {
    getAll, getOne,
};

function getAll(){
    return topsArray;
};

function getOne(id){
    const top = topsArray.find((top)=> top.id === parseInt(id));
    console.log(top);
    return top; 
};