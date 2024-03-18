// target to html element

const flagImage = document.querySelector(".country-details img");
const countryNameH1 = document.querySelector(".country-details h1");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
// fecth data by name
const searchParams = new URLSearchParams(window.location.search).get("name");
console.log(searchParams);

async function SearchByName() {
  const indiviualNAme = await fetch(
    `https://restcountries.com/v3.1/name/${searchParams}?fullText=true`
  );
  const response = await indiviualNAme.json();
  console.log(response[0].languages.sqi);
  //   console.log(response[0].name.nativeName.eng.common);
  flagImage.src = response[0].flags.svg;
  countryNameH1.innerHTML = response[0].name.common;
  if (response[0].name.nativeName) {
    nativeName.innerText = Object.values(response[0].name.nativeName)[0].common;
    console.log(nativeName.innerText);
  } else {
    nativeName.innerText = response[0].name.common;
  }
  population.innerHTML = response[0].population.toLocaleString("en-IN");
  region.innerHTML = response[0].region;
  subRegion.innerHTML = response[0].subregion;
  capital.innerHTML = response[0].capital;
  topLevelDomain.innerHTML = response[0].tld?.[0];

  if (response[0].currencies) {
    currencies.innerText = Object.values(response[0].currencies)
      .map((currency) => currency.name)
      .join(", ");
  }
  if (response[0].languages) {
    languages.innerText = Object.values(response[0].languages).join(", ");
  }
}
SearchByName();
