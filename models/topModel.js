const topsArray = [
    {
        id: 0,
        name: "None",
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7e-2l-zHK44dUf7vkbA-qfttngGAx1FPbvkwaawqJiw&s"
    },
    { 
        id: 1,
        name: "Android User",
        url: "https://i5.walmartimages.com/asr/67c5a39f-2b98-4a8e-aaf1-3fc10451fa1c.8581e561c257e53eb66c1c83bae4f9cb.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
    },

    { 
        id: 2,
        name: "Teal?",
        url: "https://i5.walmartimages.com/seo/Hanes-Men-s-and-Big-Men-s-Authentic-Short-Sleeve-Tee-Up-To-Size-6XL_a468aec2-57ba-40f2-8768-313a28dfe4d9_1.fa31d12f169b4b01ec4e8f5eefea21c6.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
    },

    { 
        id: 3,
        name: "Software Developer Hoodie",
        url: "https://i5.walmartimages.com/seo/Gildan-Unisex-Heavy-Blend-Fleece-Full-Zip-Hooded-Sweatshirt-Size-Small-to-3XL_74b7acd4-cb35-4b75-9507-90f82f7d625a.c9c31df9e37318a408ffa54d3db54183.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
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
    return top; 
};