var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const main = document.querySelector("main");
function getCountries() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://restcountries.com/v3.1/all');
        const countries = response.json();
        return countries;
    });
}
function createDiv() {
    const div = document.createElement("div");
    return div;
}
function createA(nameCountrie) {
    const a = document.createElement("a");
    a.href = `https://en.wikipedia.org/wiki/${nameCountrie}`;
    a.target = "_blank";
    return a;
}
function createImg(url, alt) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = alt;
    return img;
}
function createH2(nameCountrie) {
    const h2 = document.createElement("h2");
    h2.textContent = nameCountrie;
    return h2;
}
function rendercountries(countries) {
    const div = createDiv();
    const a = createA(countries.name.common);
    const img = createImg(countries.flags.png, countries.flags.alt);
    const h2 = createH2(countries.name.common);
    a.append(img);
    div.append(a, h2);
    main.append(div);
}
function setup() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const countries = yield getCountries();
            console.log(countries[0].name.common);
            countries.forEach(countrie => rendercountries(countrie));
            console.log(countries);
        }
        catch (error) {
        }
    });
}
document.addEventListener("DOMContentLoaded", setup);
