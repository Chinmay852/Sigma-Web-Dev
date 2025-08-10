// document.querySelector("#ran1").style.backgroundColor = "red"
// document.querySelector("#ran1").style.color = "yellow"

// document.querySelector("#ran2").style.backgroundColor = "blue"
// document.querySelector("#ran2").style.color = "white"

// document.querySelector("#ran3").style.backgroundColor = "#22ff00ff"
// document.querySelector("#ran3").style.color = "yellow"

// document.querySelector("#ran4").style.backgroundColor = "#ff560eff"
// document.querySelector("#ran4").style.color = "black"

// document.querySelector("#ran5").style.backgroundColor = "maroon"
// document.querySelector("#ran5").style.color = "yellow"

// let colors = [
//     { bg : "red", text : "yellow"},
//     { bg : "blue", text : "white"},
//     {bg : "#00ff1eff", text:"yellow"},
//     {bg : "#ff7b00ff", text:"black"},
//     {bg:"maroon", text:"yellow"}
// ];

// document.querySelectorAll(".box").forEach((box,i)=>{
// box.style.backgroundColor= colors[i].bg;
// box.style.color=colors[i].text;

// });

function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}

document.querySelectorAll(".box").forEach(box =>{
    box.style.backgroundColor = getRandomColor();
    box.style.color = getRandomColor();
});