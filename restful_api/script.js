let container = document.querySelector(".counties-container");
async function fetchDate() {
  const allCountry = await fetch("https://restcountries.com/v3.1/all");
  const res = await allCountry.json();
  res.forEach((element) => {
    // console.log(element.flags.svg);
    // console.log(element.capital?.[0]);

    const createAnchor = document.createElement("a");
    createAnchor.classList.add("country-card");
    createAnchor.href = ` ./country.html?name=${element.name.common}`;
    createAnchor.innerHTML = `<img src="${element.flags.svg}" alt="" />
<div class="card-content">
  <h3 class="card-title">${element.name.common}</h3>
  <p>Population:<b>${element.population.toLocaleString("en-IN")}</b></p>
  <p>Region: <b>${element.region}</b></p>
  <p>capital: <b>${element.capital?.[0]}n</b></p>
</div>`;

    container.append(createAnchor);
  });
}
fetchDate();
// theme chaner
const themeChanger = document.querySelector(".theme-changer");
themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
