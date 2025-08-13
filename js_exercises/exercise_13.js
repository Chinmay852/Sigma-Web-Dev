function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewNumber
        if (views<100000){
            viewNumber = views/1000 + "K";
        }

        else if (views>1000000){
            viewNumber = views/1000000 + "M";
        }

        else{
            viewNumber = views;
        }
    


    let html =`<div class="card">
            <div class="img">
                <img src="${thumbnail}"
                    alt="">

                <div class="capsule">${duration}</div>

            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewNumber} views . ${monthsOld} months ago</p>
            </div>
        </div>`;

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}




createCard("Introduction to Backend | Sigma Web Dev Video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")