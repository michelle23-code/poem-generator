 function displayPoem(response){
          new Typewriter("#poem",{
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
          })


 }
 
 function generatePoem(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "13564a02toa98fc1f3feb5454b70d3af";
    let prompt = `Generate a poem about ${instructionsInput.value}`;
    let context = "You are English  teacher and love to write short poems.You mission is to generate 6 line poems in basic HTML.The poem should have a heading.please sigh the the poem with AI Generated poem at the end with<strong>.Make sure to follow the user instructins";
    let apiUrl =
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

      console.log("Genarating a poem")
axios.get(apiUrl).then(displayPoem);

 }
let poemFormElement = document.querySelector("#poem-generator")
poemFormElement.addEventListener("submit", generatePoem);