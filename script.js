let inp = document.getElementById("getInp")
let Cname = document.getElementById("countryName")
let capital = document.getElementById("capital")
let continent = document.getElementById("continent")
let population = document.getElementById("population")
let commonLang = document.getElementById("commonLang")
let currency = document.getElementById("currency")
let btn = document.getElementById("btn")
let flag = document.getElementById("flag")

let getGuide = () =>{
  let url = `https://restcountries.com/v3.1/name/${inp.value}?fullText=true`
  fetch(url)
  .then(data => data.json())
  .then(item =>{
    Cname.innerHTML = `<h2>${item[0].name.common}</h2>`
    flag.innerHTML = `<img class="flag" src="${item[0].flags.svg}" />`
    capital.innerHTML = `<p><span class = "keys">Capital : </span>${item[0].capital}</p>`
    continent.innerHTML = `<p><span class = "keys">Continent : </span>${item[0].continents}`
    population.innerHTML = `<p><span class = "keys">Population : </span>${item[0].population}`
    commonLang.innerHTML = `<p><span class = "keys">Common languege : </span>${Object.values(item[0].languages)}`
    currency.innerHTML = `<p><span class = "keys">Currency : </span>${Object.keys(item[0].currencies)}`
  })
}
btn.addEventListener('click', getGuide)
getGuide()