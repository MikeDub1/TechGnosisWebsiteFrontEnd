import React from 'react';
import ReactDOM from 'react-dom';
import WhatsHotBlock from './WhatsHotBlock.js';

let communities = []

function renderShit(threads)
{
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


if(window.localStorage.getItem("Username") == "DEADLYHIPPO4")
{
    threadSampleObject1 =
    {
        title: "Sometitle",
        preview: "SomePreview",
        community: "Gamers"
    };
    threadSampleObject2 =
    {
        title: "Sometitle",
        preview: "SomePreview",
        community: "Gardening"
    };
    threadSampleObject3 =
    {
        title: "Sometitle",
        preview: "SomePreview",
        community: "Cooking"
    };
    threadSampleObject4 =
    {
        title: "Whatup mama!",
        preview:"Today, is my mommy's bday. I wish her the best of luck during this shitty year!",
        community: "Gardening"
    };
}

else if(window.localStorage.getItem("Username") == "MigzLeon")
{
    threadSampleObject1 =
    {
        title: "I feel like sucking flask's dick",
        preview: "Im wondering, is this normal?",
        community: "Flask"
    };
    threadSampleObject2 =
    {
        title: "Is it possible to get stoned off of one hit?",
        preview: "Hey guys, I am a noob in smoking pot and I was wondering....",
        community: "Weed"
    };
    threadSampleObject3 =
    {
        title: "Ok...",
        preview: "I can't get over how REALLY simple it is to use Flask!!!",
        community: "Flask"
    };
    threadSampleObject4 =
    {
        title: "Hey guys!",
        preview:"EMERGENCY MESSAGE: HARRY SE ESTÀ GARCHANDO A TOOOODOS!!!",
        community: "ElBananero"
    };
}

if(window.localStorage.getItem("Username") == "240FPS-girl")
{
    threadSampleObject1 =
    {
        title: "LOOK AT THIS:",
        preview: "Haha, I just assblasted this noob in MW!",
        community: "Gamers"
    };
    threadSampleObject2 =
    {
        title: "Hey guys, watch my stream!",
        preview: "I am a girl that is trying to make a living as a gamer and streamer,..",
        community: "twitch"
    };
    threadSampleObject3 =
    {
        title: "Why are men weirdos?",
        preview: "So the other day, this guy was texting me on tinder and he seemed really cute until...",
        community: "tinder"
    };
    threadSampleObject4 =
    {
        title: "Whatup mama!",
        preview:"Hey guys, I am currently looking for a family man to date!!!",
        community: "FamilyMen"
    };
}



let content = document.getElementById("content");
let threadSampleObject1, threadSampleObject2, threadSampleObject3, threadSampleObject4;


let threads = [threadSampleObject1, threadSampleObject2, threadSampleObject3, threadSampleObject4];

communities.push(threadSampleObject1.community);
if(!communities.includes(threadSampleObject2.community))
    communities.push(threadSampleObject2.community);

if(!communities.includes(threadSampleObject3.community))
    communities.push(threadSampleObject3.community);

if(!communities.includes(threadSampleObject4.community))
    communities.push(threadSampleObject4.community);



renderShit(threads);