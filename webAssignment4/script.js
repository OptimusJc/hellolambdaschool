document.body.style.backgroundColor = "red";
document.getElementById('header1').style.color = "blue";
document.body.style.fontFamily = "Sans-serif";
document.getElementById('nickname').innerHTML = "Cruz";
document.getElementById('favourites').innerHTML = "Coding, Watching movies, Swimming.etc";
document.getElementById('hometown').innerHTML = "Jericho Nairobi, Kenya";

var elements = document.getElementsByClassName('listitem');
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "yellow";

};

var x = document.createElement('IMG');
x.setAttribute("src", "myCat.jpg");
x.setAttribute("height", "250");
x.setAttribute("width", "300");
x.setAttribute("alt", "myImage");
document.body.appendChild(x);
