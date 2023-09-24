const button = document.querySelector("button");
button.addEventListener("click", display);
let resultdiv = document.createElement("div");
resultdiv.id = "result";
document.getElementById("wrapper").appendChild(resultdiv);

function display() {
  let input = document.getElementById("input");
  const city = input.options[input.selectedIndex].value;
  let population = 0,
    literacyRate = 0,
    language = "";
  switch (city) {
    case "Chennai":
      population = 5690128;
      literacyRate = 88.9;
      language = "Tamil";
      break;
    case "Bangalore":
      population = 3940128;
      literacyRate = 85.9;
      language = "Kannada";
      break;
    case "Delhi":
      population = 15690128;
      literacyRate = 90.9;
      language = "Hindi";
      break;
    case "Mumbai":
      population = 9690128;
      literacyRate = 95.9;
      language = "Hindi";
      break;
  }
  if (input.selectedIndex > 0) {
    const txt = `The indian of ${city} has a ${population} and Language spoken is ${language} and Literacy Rate is ${literacyRate}`;
    document.getElementById("result").innerHTML = txt;
  } else {
    document.getElementById("result").innerHTML = "";
    alert("select city");
  }
}
