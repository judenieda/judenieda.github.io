function
myFunction() {
var listItem = document.createElement("LI");
var textItem = document.createTextNode("The Isabella Stewrart Gardner Museum is the my favorite museum in Boston!");
listItem.appendChild(textItem);
document.getElementById("newFact").appendChild(listItem);
document.getElementById("button").style.display="none"
}
