let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML=
    "<b>Yayy you were cicked </b> Enjoy your click! "
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Right Click")

})