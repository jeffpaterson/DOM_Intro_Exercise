console.log("Javascript is alive!");

var li=document.getElementsByTagName('li');
var myImg=document.createElement("img");


// 1. Change the greeting from "Hello, There!" to "Hello, World!".

document.getElementById('greeting').innerText = "Hello World!";


// 2. Set the background color of each <li> to yellow.

for (i=0 ; i<li.length ; i++) {
    li[i].style.backgroundColor = "yellow"; 
}


// 3. Create an image tag, set its src attribute to http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif, and append the to the #greeting div.

myImg.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
document.getElementById('greeting').appendChild(myImg);

// Afterwards
// 1. Add the class of selected to an <li> when it is clicked. 
// Remove it from any other lis as well.

    li[0].addEventListener("click", function(){
      unselect();
      li[0].className = "selected";
      myImg.setAttribute('src', 'images/milk.jpeg');
      document.getElementById('greeting').appendChild(myImg);

    });

    li[1].addEventListener("click", function(){
      unselect();
      li[1].className = "selected";
      myImg.setAttribute('src', 'images/honey.jpeg');
      document.getElementById('greeting').appendChild(myImg);
    });

    li[2].addEventListener("click", function(){
      unselect();
      li[2].className = "selected";
      myImg.setAttribute('src', 'images/water.jpeg');
      document.getElementById('greeting').appendChild(myImg);
    });

    li[3].addEventListener("click", function(){
      unselect();
      li[3].className = "selected";  
      myImg.setAttribute('src', 'images/wine.jpeg');
      document.getElementById('greeting').appendChild(myImg);
    });

    li[4].addEventListener("click", function(){
      unselect();
      li[4].className = "selected";
      myImg.setAttribute('src', 'images/beer.jpeg');
      document.getElementById('greeting').appendChild(myImg);
    });

    function unselect(){
      for (i=0 ; i<li.length ; i++) {
            li[i].className = "";  
      }
    }

// 2. Change the image to be the most recently clicked food item.
// ***See above


// 3. When the gray div is moused over, it's removed from the DOM.

var grayGone = document.getElementById("ghosting");
grayGone.addEventListener("click", function(){
    grayGone.outerHTML = "";
});


// 4. When the orange div is moused over, its width doubles. When the mouse moves out of the div, it returns to its original size.

var orangeDub = document.getElementById("resize");
var origWidth = 200;

orangeDub.addEventListener("mouseover", function(){
  orangeDub.style.width=(origWidth*2)+"px";
  });

orangeDub.addEventListener("mouseout", function(){
  orangeDub.style.width=origWidth+"px";
  });


// 5. When the reset button is clicked - remove the selected class from each <li> 
// and change the image to panic.jpeg.

var panic = document.getElementById("reset");

panic.addEventListener("click", function(){
  unselect();
  myImg.setAttribute('src', 'images/panic.jpeg');
  document.getElementById('greeting').appendChild(myImg);
});

// 6. When the 1, 2, 3, 4, 5, 6, 7, 8, 9, or 0 key is pressed, 
// the page alerts the message ""

window.addEventListener('keydown', function(e) {
    if ( e.keyCode >= 48 && e.keyCode <=57 ) {
    alert("I HATE NUMBERZZZ!");
    }
});