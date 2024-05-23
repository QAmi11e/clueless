const bottomsArray = [
    {
        id: 0,
        name: "None",
        url: ""
    },
    { 
        id: 1,
        name: "Flame Resistant Pants",
        url: "https://i.imgur.com/dQOnCxA.png"
    },

    { 
        id: 2,
        name: "Pikachu Pants",
        url: "https://i.imgur.com/O89b3R4.png"
    },

    { 
        id: 3,
        name: "Cargos",
        url: "https://i.imgur.com/vXTRM0u.png"
    }
];

module.exports = {
    getAll, getOne,
};

function getAll(){
    return bottomsArray;
};

function getOne(id){
    return bottom = bottomsArray.find((bottom)=> bottom.id === parseInt(id));
};