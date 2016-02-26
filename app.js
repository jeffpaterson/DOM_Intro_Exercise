console.log("Javascript is alive!");

var li=document.getElementsByTagName('li');
var oImg=document.createElement("img");

document.getElementById('greeting').innerText = "Hello World!";

for (i=0 ; i<li.length ; i++) {
    li[i].style.backgroundColor = "yellow";
}

// document.getElementsByTagName('li')[0].style.backgroundColor = "yellow";
// document.getElementsByTagName('li')[1].style.backgroundColor = "yellow";
// document.getElementsByTagName('li')[2].style.backgroundColor = "yellow";
// document.getElementsByTagName('li')[3].style.backgroundColor = "yellow";
// document.getElementsByTagName('li')[4].style.backgroundColor = "yellow";

oImg.setAttribute('src', 'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif');
document.getElementById('greeting').appendChild(oImg);

