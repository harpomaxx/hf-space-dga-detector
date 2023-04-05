const textGenForm = document.querySelector(".text-gen-form");

const translateText = async (text) => {
  const inferResponse = await fetch(`predict?domain=${text}`);
  const inferJson = await inferResponse.json();
  console.log(inferResponse);
  console.log(inferJson);
  const res = `domain:"${text}",probDGA:${inferJson.probability}`;
  return res
};


textGenForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const textGenInput = document.getElementById("text-gen-input");
  const textGenParagraph = document.querySelector(".text-gen-output");

  // Split the inputted text into separate domains
  const domains = textGenInput.value.trim().split('\n');
  
  let output = '';
  
  // Loop over each domain and submit it to the URL one at a time
  for (let i = 0; i < domains.length; i++) {
    output += await translateText(domains[i]) + '\n';
  }
  
  textGenParagraph.textContent = output;
});

