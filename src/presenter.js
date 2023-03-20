import romano from "./romano";


const form = document.querySelector("#romano-form");
const numero = document.querySelector("#numero");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + romano(num) + "</p>";
});
