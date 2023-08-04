// no longer has DOM node 'main#main'
const main = document.getElementById("main");
main.remove();

// has a 'newHeader' variable that points to an <h1> node
const newHeader = document.createElement("h1");
// the 'newHeader' variable that points to the <h1> node has an id of 'victory'
newHeader.id = "victory";

// the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion"
newHeader.innerHTML = "Menar is the champion";

document.body.appendChild(newHeader);
