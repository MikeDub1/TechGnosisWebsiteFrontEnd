import React from 'react';
import ReactDOM from 'react-dom'
import WhatsHotBlock from './WhatsHotBlock.js'
;
function renderShit(threads)
{
    let reactContainer = document.createElement("div");
    let parentContainer = document.getElementById("content");
    if(!parentContainer) return;

    for(let i = 0; i < threads.length; i++)
    {
        ReactDOM.render(<WhatsHotBlock community={threads[i].community} threadTitle = {threads[i].title} threadPreview = {threads[i].preview}/>, reactContainer);
        parentContainer.appendChild(reactContainer);
    }
    
}

let threadSampleObject1 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "GAMERZZZ"
};
let threadSampleObject2 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "GAMERZZZ"
};
let threadSampleObject3 =
{
    title: "Sometitle",
    preview: "SomePreview",
    community: "GAMERZZZ"
};

let threads = [threadSampleObject1, threadSampleObject2, threadSampleObject3];

renderShit(threads);