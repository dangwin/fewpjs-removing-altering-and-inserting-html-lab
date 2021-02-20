// Write your code here!
var element = document.getElementById('main');
element.remove();

let newHeader = document.createElement('h1');

let attribute = document.createAttribute("id");
attribute.value = "victory";
newHeader.setAttributeNode(attribute);

document.body.appendChild(newHeader)
newHeader.innerHTML = "Dang is the champion";