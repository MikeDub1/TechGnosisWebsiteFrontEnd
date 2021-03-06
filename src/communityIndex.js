import React from 'react'
import ReactDOM from 'react-dom'
import CommunityContent from './CommunityContent.js'



let followingThread1 = {
    favicon: "../images/Icon-1_1.svg",
    name: "A sample thread",
    author: "John Appleseed"
}
let normalThread1 = {
    favicon: "../images/Icon-2.svg",
    name: "Another sample thread",
    author: "John Doe"
}
let followingThreads = [followingThread1]
let normalThreads = [followingThread1, normalThread1]

ReactDOM.render(<CommunityContent header="Sample Heading"
                backgroundImageHeader="url(/home/mike/TechGnosisProjects/TechGnosisWebsite/contactus-techgnosis-webflow/images/portfolio-1---wide.svg)"
                backgroundImage="url(/home/mike/TechGnosisProjects/TechGnosisWebsite/techImage/17973908.eps)"
                following={followingThreads}
                threads={normalThreads}
                />, document.getElementById("section")
                );