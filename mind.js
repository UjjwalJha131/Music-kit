

var numberOfDrumButtons = document.querySelectorAll(".kits").length;
var contEl = document.querySelector(".container");

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".kits")[i].addEventListener("click", function() {

    var letters = this.innerHTML;

    playMusic(letters);

    animate(letters);

    create(letters)

  });

}

function animate(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("animation");
  
    setTimeout(function() {
      activeButton.classList.remove("animation");
    }, 50);
  
  }

document.addEventListener("keypress" , (event) => {
    playMusic(event.key)
    animate(event.key);
    create(event.key)
});

function playMusic(key) {

    switch(key) {
        case "a":
        let music1 = new Audio("sounds/tom-1.mp3");
        music1.play();
        break;

        case "s":
        let music2 = new Audio("sounds/tom-2.mp3");
        music2.play();
        break;

        case "d":
        let music3 = new Audio("sounds/tom-3.mp3");
        music3.play();
        break;

        case "f":
        let music4 = new Audio("sounds/tom-4.mp3");
        music4.play();
        break;

        case "g":
        let music5 = new Audio("sounds/kick-bass.mp3");
        music5.play();
        break;

        case "h":
        let music6 = new Audio("sounds/snare.mp3");
        music6.play();
        break;

        case "j":
        let music7 = new Audio("sounds/crash.mp3");
        music7.play();
        break;

        case "k":
        let music8 = new Audio("sounds/guitar2.mp3");
        music8.play();
        break;

        default:
            console.log(key)
    }
}

//bg animation

for (let i=1; i<=200; i++){
    const blocks = document.createElement('div')
    blocks.classList.add('block');
    contEl.appendChild(blocks);
}

function create(){
    anime({
        targets: '.block',
        translateX : function(){
            return anime.random(-700,700)
        },
        translateY : function(){
            return anime.random(-300,300)
        },
      
      
        scale : function(){
            return anime.random(1,5)
        }
    })
}

create()


