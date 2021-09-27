/* let admin;
let name;
name = "John";
admin= name;
alert (admin)
name = prompt("Szia! Mi a neved?");
alert(`De miért ${name}?`);

role = prompt("Ki vagy?");
if (role == "Admin") password = prompt("Enter a password");
if (role == ("") || role == null) {alert("Canceled");
} else {alert("I don't know you");
}
if (password == "TheMaster") {alert("Welcome");
} else if (password == True) {alert("Wrong password");
} else {alert("Canceled");
} */
let modal = document.getElementById("myModal");
let img1 = document.getElementById("vako1");
let img2 = document.getElementById("vako2");
let img3 = document.getElementById("vako3");
let img4 = document.getElementById("szieszta1");
let img5 = document.getElementById("szieszta2");
let img6 = document.getElementById("szieszta3");
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}



