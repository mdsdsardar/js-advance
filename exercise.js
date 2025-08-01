// Exercise Time!

// 1. Select the <h1> element by "drilling into the DOM" and
//    save it in a variable with a name of your choice

let get_element = document.body.children[0];
console.log(get_element);
// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
let parent_element = get_element.parentElement;
console.log(parent_element);
//    BONUS: Try using the variable from (1) to get access to the
//    sibling element (i.e. the <p> element next to the <h1> element)
let sibling_element = get_element.nextElementSibling;
console.log(sibling_element);
// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
get_element = document.getElementById("h1_element");
console.log(get_element);
// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class)
//    and store it in a new variable with a name of your choice
let p_elemnt = document.querySelector(".p_class");
console.log(p_elemnt);
// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
p_elemnt = p_elemnt.textContent = "new stuff"; //It only contain text unlike innerHTML.
