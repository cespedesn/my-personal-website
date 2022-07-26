/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
/* document.querySelector("body").appendChild(h2); "This goes into the DOM" */


function changeBackground() {
    const text = document.getElementById("my_Skills").style
    text.backgroundColor= "white" 
}

function changeBackground2() {
    const text = document.getElementById("my_Skills2").style
    text.backgroundColor= "white" 
}

function backToNormal() {
    const text = document.getElementById("my_Skills").style
    text.backgroundColor= "" 
}

function backToNormal2() {
    const text = document.getElementById("my_Skills2").style
    text.backgroundColor= "" 
}
