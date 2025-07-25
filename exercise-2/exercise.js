// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
const fst_btn = document.querySelector("button");
// console.dir(fst_btn);
const snd_btn = document.getElementById("snd_btn");
// console.dir(snd_btn);
// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function fst_func() {
  third_pgph.remove();
  console.dir(fst_btn);
}
fst_btn.addEventListener("click", fst_func);
//    - Output the second button WITHOUT using the variable in which it's stored
function snd_func(event) {
  //   fst_pgph.style.backgroundColor = "blue"; //can drill down from browser to do this.
  fst_pgph.classList.add("blue-bg"); //It'll this class to existing class best option.
  console.dir(event.target);
}
snd_btn.addEventListener("click", snd_func);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
let fst_pgph = document.body.children[2].children[1];
let third_pgph = document.body.children[2].children[3];
// console.log(third_pgph);
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue
// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
