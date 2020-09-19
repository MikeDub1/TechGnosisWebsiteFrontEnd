import React from 'react';
import ReactDOM from 'react-dom';
import WhatsHotBlock from './WhatsHotBlock.js';
function renderShit(threads)
{
    
    let communities = ['Gamers', 'Gardening', 'Cooking'];
    let content = document.getElementById("content");

    for(let i = 0; i < communities.length; i++)
    {
        let reactContainer = document.createElement("div");
        ReactDOM.render(<WhatsHotBlock community = {communities[i]} ref={(block) => {window.block = block}}/>, reactContainer);

        for(let j = 0; j < threads.length; j++)
        {
            
            if(threads[j].community == communities[i])
            {
                console.log("I AM IN!!");
                window.block.handleThreadSampleListChange(threads[j]);
            }
                
        }
        content.appendChild(reactContainer);

    }
    
}

let threadSampleObject1 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "Gamers"
};
let threadSampleObject2 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "Gardening"
};
let threadSampleObject3 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "Cooking"
};
let threadSampleObject4 =
{
    title: "Whatup mama!",
    preview:"Today, is my mommy's bday. I wish her the best of luck during this shitty year!",
    community: "Gardening"
}

let threads = [threadSampleObject1, threadSampleObject2, threadSampleObject3, threadSampleObject4];

renderShit(threads);