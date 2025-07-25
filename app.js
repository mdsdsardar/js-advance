let p_element = document.querySelector("p");
function text_change() {
  p_element.textContent = "Clicked!";
}
p_element.addEventListener("click", text_change);
//call func like text_change instead of text_change(), so that it should execute when sibling event occured.
let input_element = document.querySelector("input");
function input_count(event) {
  //   let var_input = input_element.value;
  let var_input = event.target.value;
  //   let var_input = event.data; // This is different.
  console.log(var_input);
}
input_element.addEventListener("input", input_count);
