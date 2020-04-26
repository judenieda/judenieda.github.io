function
myFunction() {
var listItem = document.createElement("LI");
var textItem = document.createTextNode("I'm a Felxitarian!");
listItem.appendChild(textItem);
document.getElementById("newFact").appendChild(listItem);
document.getElementById("button").style.display="none"}
function 
  changename(){
    //Change name to nickname
  var h1= document.getElementById("NickName");
  if (h1.innerHTML==="Judenie")
    h1.innerHTML="Juju"
  else h1.HTML="Judenie";
  }

