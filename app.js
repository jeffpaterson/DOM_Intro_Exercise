console.log("Javascript is alive!");

var panic = document.getElementById("reset");
var lis=document.getElementsByTagName('li');
var myImg=document.createElement("img");
var images = ["./images/milk.jpeg", "./images/honey.jpeg", "./images/water.jpeg", "./images/wine.jpeg", "./images/beer.jpeg"];
var orangeDub = document.getElementById("resize");
var origWidth = 200;
var grayGone = document.getElementById("ghosting");
var j;

// 1. Change the greeting from "Hello, There!" to "Hello, World!".

document.getElementById('greeting').innerText = "Hello, World!";

// 2. Set the background color of each <li> to yellow.

  for (var i = lis.length - 1; i >= 0; i--) {
    lis[i].style.backgroundColor = "yellow";
    lis[i].className="";
    lis[i].addEventListener("click", selectLi);
  }

function selectLi(){
    var curSelected = document.querySelector(".selected");
    if (curSelected) { curSelected.className = ""; }
    this.className = "selected";
    document.querySelectorAll("img")[1].src = "./images/" + this.innerHTML + ".jpeg";

}


// 3. Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.

myImg.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
document.getElementById('greeting').appendChild(myImg);

// Afterwards
// 1. Add the class of selected to an <li> when it is clicked. 
// Remove it from any other lis as well.

   

// 2. Change the image to be the most recently clicked food item.
// ***See above


// 3. When the gray div is moused over, it's removed from the DOM.

grayGone.addEventListener("mouseover", function(){ 
  this.remove();
});

// 4. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.


orangeDub.addEventListener("mouseover", function(){
  orangeDub.style.width=(origWidth*2)+"px";
  });

orangeDub.addEventListener("mouseout", function(){
  orangeDub.style.width=origWidth+"px";
  });


// 5. When the reset button is clicked - remove the selected class from each <li> 
// and change the image to panic.jpeg.


panic.addEventListener("click", function(){
  var curSelected = document.querySelector(".selected");
  if (curSelected) { curSelected.className = ""; }
   document.querySelectorAll("img")[1].setAttribute("src","./images/panic.jpeg");
});

// 6. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, 
// the page alerts the message ""

window.addEventListener('keydown', function(event) {
    if ( event.keyCode >= 48 && event.keyCode <=57 ) {
    alert("I HATE NUMBERZZZ!");
    }
});