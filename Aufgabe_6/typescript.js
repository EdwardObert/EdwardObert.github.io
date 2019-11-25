//2018
var emissionAfrica18 = 1235.5;
var emissionSouthAmerica18 = 1261.5;
var emissionEurope18 = 4209.3;
var emissionNorthAmerica18 = 6035.6;
var emissionAsia18 = 16274.1;
var emissionAustralia18 = 2100.5;
var emissiontotal18 = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;
//2008
var emissionAfrica8 = 1028;
var emissionSouthAmerica8 = 1132.6;
var emissionEurope8 = 4965.7;
var emissionNorthAmerica8 = 6600.4;
var emissionAsia8 = 12954.7;
var emissionAustralia8 = 1993;
var emissiontotal8 = emissionAfrica8 + emissionSouthAmerica8 + emissionEurope8 + emissionNorthAmerica8 + emissionAsia8 + emissionAustralia8;
//Prozente Afrika
var percentAfrica1 = emissionAfrica18 * 100 / emissiontotal18;
var percentAfrica2 = emissionAfrica18 - emissionAfrica8;
var percentAfrica3 = percentAfrica2 / emissionAfrica8 * 100;
//Prozente South America
var percentSouthAmerica1 = emissionSouthAmerica18 * 100 / emissiontotal18;
var percentSouthAmerica2 = emissionSouthAmerica18 - emissionSouthAmerica8;
var percentSouthAmerica3 = percentAfrica2 / emissionSouthAmerica8 * 100;
//Prozente Europa
var percentEurope1 = emissionEurope18 * 100 / emissiontotal18;
var percentEurope2 = emissionEurope18 - emissionEurope8;
var percentEurope3 = percentEurope2 / emissionEurope8 * 100;
//Prozente NorthAmercia
var percentNorthAmerica1 = emissionNorthAmerica18 * 100 / emissiontotal18;
var percentNorthAmerica2 = emissionNorthAmerica18 - emissionNorthAmerica8;
var percentNorthAmerica3 = percentNorthAmerica2 / emissionNorthAmerica8 * 100;
//Prozente Asia
var percentAsia1 = emissionAsia18 * 100 / emissiontotal18;
var percentAsia2 = emissionAsia18 - emissionAsia8;
var percentAsia3 = percentAsia2 / emissionAsia8 * 100;
// Prozente Australianien
var percentAustralia1 = emissionAustralia18 * 100 / emissiontotal18;
var percentAustralia2 = emissionAustralia18 - emissionAustralia8;
var percentAustralia3 = percentAustralia2 / emissionAustralia8 * 100;
// Aufgabe 6 shietz
//Opa opa hier ist Europa
function Eurofunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#Wert1").innerHTML = "" + emissionEurope18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentEurope1;
    document.querySelector("#Wert3").innerHTML = "" + percentEurope3;
    document.querySelector("#Wert4").innerHTML = "" + percentEurope2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentEurope1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Europa').addEventListener('click', Eurofunk);
});
//NordAmerikanianien
function NAfunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#Wert1").innerHTML = "" + emissionNorthAmerica18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentNorthAmerica1;
    document.querySelector("#Wert3").innerHTML = "" + percentNorthAmerica3;
    document.querySelector("#Wert4").innerHTML = "" + percentNorthAmerica2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentNorthAmerica1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#NA').addEventListener('click', NAfunk);
});
//Südamerikano
function SAfunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#Wert1").innerHTML = "" + emissionSouthAmerica18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentSouthAmerica1;
    document.querySelector("#Wert3").innerHTML = "" + percentSouthAmerica3;
    document.querySelector("#Wert4").innerHTML = "" + percentSouthAmerica2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentSouthAmerica1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#SA').addEventListener('click', SAfunk);
});
//Africabambata
function Afrofunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#Wert1").innerHTML = "" + emissionAfrica18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentAfrica1;
    document.querySelector("#Wert3").innerHTML = "" + percentAfrica3;
    document.querySelector("#Wert4").innerHTML = "" + percentAfrica2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentAfrica1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Afrika').addEventListener('click', Afrofunk);
});
//Azia evrazia
function Asiafunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#Wert1").innerHTML = "" + emissionAsia18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentAsia1;
    document.querySelector("#Wert3").innerHTML = "" + percentAsia3;
    document.querySelector("#Wert4").innerHTML = "" + percentAsia2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentAsia1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Asia').addEventListener('click', Asiafunk);
});
//Australianien
function Ausfunk() {
    document.querySelector("#Titel").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#Wert1").innerHTML = "" + emissionAustralia18;
    document.querySelector("#Wert1text").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#Wert2").innerHTML = "" + percentAustralia1;
    document.querySelector("#Wert3").innerHTML = "" + percentAustralia3;
    document.querySelector("#Wert4").innerHTML = "" + percentAustralia2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentAustralia1 + '%');
}
window.addEventListener('load', function () {
    document.querySelector('#Aus').addEventListener('click', Ausfunk);
});
//Balke alldoor
//# sourceMappingURL=typescript.js.map