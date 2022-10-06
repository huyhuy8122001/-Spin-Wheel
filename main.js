let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * (12000 - 8000) + 8000);
console.log(number)
btn.onclick = function() {
    wheel.play()
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * (12000 - 8000) + 8000);
    console.log(number)

    setTimeout(function(){
        congrats.play()
    }, 2000)
}