 function generatePoem(event){
    event.preventDefault();
      new Typewriter("#poem",{
    strings: "hello my name is michelle",
    autoStart: true,
    delay: 1,
    cursor: "",



 })
 }
let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit", generatePoem);