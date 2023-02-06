// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"

// let firstButtonElement = document.querySelector("button");
// function consoleDirremPar() {
//   console.dir(firstButtonElement);
// }

//    - Select the second button by using an "id"

// let secondButtonElement = document.getElementById("blue-background");

//function function2(event) {
//  console.dir(event.target);
//}

// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored

// firstButtonElement.addEventListener("click", delFirstPar);

//    - Output the second button WITHOUT using the variable in which it's stored

// secondButtonElement.addEventListener("click", function2);

// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)

//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements

const paragraphs = document.querySelectorAll('section p');
const removeBtn = document.querySelector('#remove-btn');
const colorBtn = document.querySelector('#color-btn');

function changeBckgClr() {
  paragraphs[0].style.backgroundColor = 'blue';
}

colorBtn.addEventListener('click', changeBckgClr);

//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)

function delFirstPar() {
  paragraphs[2].remove();
}

removeBtn.addEventListener('click', delFirstPar);

//    - The second button changes the background color of the first paragraph to blue

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!
