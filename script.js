function
myFunction() {
var listItem = document.createElement("LI");
var textItem = document.createTextNode("I'm a Felxitarian!");
listItem.appendChild(textItem);
document.getElementById("newFact").appendChild(listItem);
document.getElementById("button").style.display="none";
                               
 }

