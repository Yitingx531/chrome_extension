
console.log("blah TEST");
console.log(document);
const titleField = document.querySelector("title");
console.log(titleField);


setTimeout(function printTitle() {
    console.log(document.querySelector("title"))
}, 2000);



document.addEventListener("click", (event) => {
    
    console.log("CHANGING " , document.querySelector("title"));
    console.log(event);
    //result.textContent = `You like ${event.target.value}`;
  });