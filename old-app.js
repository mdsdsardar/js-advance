// document.body.children[1].children[0].href = "https://www.google.com";
let anchor_element = document.getElementById("new_id");
console.dir(anchor_element); //To find the available prop, later helpful for modifications.
anchor_element.href = "https://www.google.com";
// document.querySelectorAll('p a') //It'll modify all matching values.
anchor_element = document.querySelector("p a"); // Similar to CSS selector. It'll modify 1st matching value
anchor_element.href = "https://www.facebook.com";

//Create new element,
let new_element = document.createElement("a");
// Append it into existing element.
let sel_h1_element = document.getElementById("h1_element");
sel_h1_element.append(new_element);

// sel_h1_element.remove();
sel_h1_element.parentElement.append(sel_h1_element);
sel_h1_element.innerHTML = "This is main <strong> Heading </strong>";
