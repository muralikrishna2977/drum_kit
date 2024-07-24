// var numberOfDrums=document.querySelectorAll(".drum").length;
// for(var i=0; i<numberOfDrums; i++)
//     {
//         document.querySelectorAll(".drum")[i].addEventListener("click", function()
//     {
//         this.style.color="white";
//     })
//     }


var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0; i<numberOfDrums; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML=this.innerHTML;
        playsound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keypress", function(event){
    playsound(event.key);
    addAnimation(event.key);
})

function playsound(button_innerhtml)
{
        switch(button_innerhtml)
        {
            case "w":
                var audio=new Audio("./sounds/tom-1.mp3");
                audio.play();
            break;

            case "a":
                var audio=new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;

            case "s":
                var audio=new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            
            case "d":
                var audio=new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

            case "j":
                var audio=new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            
            case "k":
                var audio=new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;

            case "l":
                var audio=new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            
            default:
                console.log(buttonInnerHTML);
            
        }
}

function addAnimation(word)
{
    var activeButton=document.querySelector("."+word);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}