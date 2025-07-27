for (i = 0; i <= 10; i++) {
  console.log(i);
}
const users = ["md", "saad", "sardar"]; //For of is majorly used for array/list data str.
for (const user of users) {
  console.log(user);
}
const loggedInUser = {
  name: "Saad",
  age: 25,
  isAdmin: true,
}; // For in is used for object str.
for (const propertyName in loggedInUser) {
  console.log(propertyName);
  console.log(loggedInUser[propertyName]);
}
let isFinished = false;
while (!isFinished) {
  isFinished = confirm("Do you want to Quit?");
}
console.log("Done");
