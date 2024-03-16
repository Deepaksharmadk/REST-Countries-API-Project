let container = document.querySelector(".counties-container");
async function fetchDate() {
  const allCountry = await fetch("https://restcountries.com/v3.1/all");
  const res = await allCountry.json();
  res.forEach((element) => {
    console.log(element.flags.svg);
    const createAnchor = document.createElement("a");
    createAnchor.classList.add("country-card");
    createAnchor.innerHTML = `<img src="${element.flags.svg}" alt="" />
<div class="card-content">
  <h3 class="card-title">Germany</h3>
  <p>Population:<b>81,770</b></p>
  <p>Region: <b>Europe</b></p>
  <p>capital: <b>Berlin</b></p>
</div>`;

    container.append(createAnchor);
  });
}
fetchDate();

// // console.log(container);
// // const createAnchor = document.createElement("a");
// // createAnchor.classList.add("country-card");
// // // console.log(createAnchor);
// // const sec = `<img src="https://flagcdn.com/fr.svg" alt="" />
// // <div class="card-content">
// //   <h3 class="card-title">Germany</h3>
// //   <p>Population:<b>81,770</b></p>
// //   <p>Region: <b>Europe</b></p>
// //   <p>capital: <b>Berlin</b></p>
// // </div>`;
const countriesContainer = document.querySelector(".counties-container");

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     data.forEach((country) => {
//       // console.log(country);
//       const countryCard = document.createElement("a");
//       countryCard.classList.add("country-card");
//       countryCard.href = `/country.html?name=${country.name.common}`;
//       countryCard.innerHTML = `
//             <img src="${country.flags.svg}" alt="flag" />
//             <div class="card-text">
//                 <h3 class="card-title">${country.name.common}</h3>
//                 <p><b>Population: </b>${country.population.toLocaleString(
//                   "en-IN"
//                 )}</p>
//                 <p><b>Region: </b>${country.region}</p>
//                 <p><b>Capital: </b>${country.capital?.[0]}</p>
//             </div>
//     `;
//       countriesContainer.append(countryCard);
//     });
//   });
