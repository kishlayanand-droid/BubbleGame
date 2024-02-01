// <===============Making Bubble===============>

function makebubble(){
    var clutter = "";

for(var i = 1; i<=360; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML = clutter;
}

// <===============Decreasing Timer===============>

var timer = 60;
function runtimer(){
    var timeint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else{
            clearInterval(timeint);
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

// <===============Getting new hit===============>

var hitrn = 0;
function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

// <===============Increaing score===============>
var score = 0;
function Increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

// <===============Event bubbling===============>

document.querySelector("#pbottom").addEventListener("click", function(bubble){
    var clickednum = Number(bubble.target.textContent);
    if(clickednum === hitrn){
        Increasescore();
        makebubble();
        getnewhit();
    }
})

makebubble();
runtimer();
getnewhit();