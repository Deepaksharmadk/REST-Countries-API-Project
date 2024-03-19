let container = document.querySelector(".counties-container");
const filterByRegion = document.querySelector(".filter-by-region");
// console.log(filterByRegion);
const searchInput = document.querySelector(".search-container input");
let allCountriesData;

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    RenderCountry(data);
    allCountriesData = data;
  });
async function w() {
  console.log(filterByRegion.value);
  const isWait = await fetch(
    `https://restcountries.com/v3.1/region/${filterByRegion.value}`
  );
  let doneFecthdata = await isWait.json();
  await RenderCountry(doneFecthdata);
}

const countriesContainer = document.querySelector(".countries-container");
filterByRegion.addEventListener("change", w);

// filterByRegion.addEventListener("change", (e) => {
//   console.log(e.target.value);
//   fetch(`https://restcountries.com/v3.1/region/${e.target.value}}`)
//     .then((res) => res.json())
//     .then(() => {});
// });
async function RenderCountry(data) {
  container.innerHTML = "";
  console.log(data);
  // const allCountry = await fetch("https://restcountries.com/v3.1/all");
  // const res = await allCountry.json();

  console.log(data);
  data.forEach((element) => {
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
  <p>capital: <b>${element.capital?.[0]}</b></p>
</div>`;

    container.append(createAnchor);
  });
}
// theme chaner
const themeChanger = document.querySelector(".theme-changer");
themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

searchInput.addEventListener("input", (e) => {
  let countryByName = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  RenderCountry(countryByName);
});
console.log(filterByRegion);
