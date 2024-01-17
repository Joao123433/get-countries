const main = document.querySelector("main")

interface Countries {
  flags: {
    png: string
    alt: string
  }
  name: {
    common: string
  }
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = response.json()
  return countries
}

function createDiv() {
  const div = document.createElement("div")
  return div
}

function createA(nameCountrie: string) {
  const a = document.createElement("a")
  a.href = `https://en.wikipedia.org/wiki/${nameCountrie}`
  a.target = "_blank"
  return a
}

function createImg(url: string, alt: string) {
  const img = document.createElement("img")
  img.src = url
  img.alt = alt
  return img
}

function createH2(nameCountrie: string) {
  const h2 = document.createElement("h2")
  h2.textContent = nameCountrie
  return h2
}

function rendercountries(countries: Countries) {
  const div = createDiv()
  const a = createA(countries.name.common)
  const img = createImg(countries.flags.png, countries.flags.alt)
  const h2 = createH2(countries.name.common)

  a.append(img)
  div.append(a, h2)
  main.append(div)
}

async function setup() {
  try {
    const countries: Countries[] = await getCountries()
    console.log(countries[0].name.common)
    countries.forEach(countrie => rendercountries(countrie))
    console.log(countries)
  } catch(error) {

  }
}

document.addEventListener("DOMContentLoaded", setup)