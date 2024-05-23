const bottomsArray = [
    {
        id: 0,
        name: "None",
        url: ""
    },
    { 
        id: 1,
        name: "Flame Resistant Pants",
        url: "https://i5.walmartimages.com/seo/Flame-Resistant-FR-High-Visibility-Hi-Vis-88-C-12-N-Pant-Trouser-32W-x-32L-Khaki_12fd4e78-9937-4848-8628-884dbb9ebb33.bde7d3a76e05c2f6c1a87f17b09ff710.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    },

    { 
        id: 2,
        name: "Navy Blue Pants",
        url: "https://i5.walmartimages.com/asr/6a1bf5de-a50a-4626-a18d-470aa880f948.7c9c090e5d4abb772fa530f6e21a49a7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    },

    { 
        id: 3,
        name: "Pikachu Pants",
        url: "https://i5.walmartimages.com/asr/8bcc7185-2dc2-4158-bca0-a34fc871adfc.920bf13dd14944e71b26aa9f72056f4d.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
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