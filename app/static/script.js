const textGenForm = document.querySelector(".text-gen-form");

const translateText = async (text) => {
  const inferResponse = await fetch(`predict?domain=${text}`);
  const inferJson = await inferResponse.json();
  console.log(inferResponse);
  console.log(inferJson);
  const res  = 'The probability of being DGA is : ' + inferJson.probability
  return res

};

textGenForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const textGenInput = document.getElementById("text-gen-input");
  const textGenParagraph = document.querySelector(".text-gen-output");

  textGenParagraph.textContent = await translateText(textGenInput.value);
});
