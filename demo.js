// Constant prop. is we cant change the value by assiging = value in later part of the code.
const prod_element = document.getElementById("click_input"); //Select Input element.
const chars_element = document.getElementById("rem_chars"); // Select main chars element.
const max_chars = prod_element.maxLength; //Check max chars limit of input element.
function count_func(event) {
  const enteredtext = event.target.value; //Get the current input text.
  const textCount = enteredtext.length; // Count the current length.
  const rem_chars = max_chars - textCount; // Count rem.
  chars_element.textContent = rem_chars; // Print rem. on Browser.
}
prod_element.addEventListener("input", count_func); //Listner req. for execution.
