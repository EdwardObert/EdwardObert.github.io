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
//Sätze
var a = "Die Emission von ";
var b = "ist: ";
var c = "kg CO2. ";
var d = "Relativ zur Gesamtemission der Welt verursacht ";
var e = "damit ";
var ee = "% ";
var f = "Für ";
var g = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var h = "verändert. ";
var i = "2018 im Vergleich zu 2008 sind das ";
var j = "kg CO2";
var Afr = "Afrika ";
var SA = "Süd Amerika ";
var E = "Europa ";
var NA = "Nord Amerika ";
var As = "Asien ";
var Aus = "Australien ";
var dot = ".";
// Console
console.log(a + Afr + b + emissionAfrica18 + c + d + Afr + e + percentAfrica1 + ee + dot + f + Afr + g + percentAfrica3 + ee + h + i + percentAfrica2 + j + dot);
console.log(a + SA + b + emissionSouthAmerica18 + c + d + SA + e + percentSouthAmerica1 + ee + dot + f + SA + g + percentSouthAmerica3 + ee + h + i + percentSouthAmerica2 + j + dot);
console.log(a + E + b + emissionEurope18 + c + d + E + e + percentEurope1 + ee + dot + f + E + g + percentEurope3 + ee + h + i + percentEurope2 + j + dot);
console.log(a + NA + b + emissionNorthAmerica18 + c + d + NA + e + percentNorthAmerica1 + ee + dot + f + NA + g + percentNorthAmerica3 + ee + h + i + percentNorthAmerica2 + j + dot);
console.log(a + As + b + emissionAsia18 + c + d + As + e + percentAsia1 + ee + dot + f + As + g + percentAsia3 + ee + h + i + percentAsia2 + j + dot);
console.log(a + Aus + b + emissionAustralia18 + c + d + Aus + e + percentAustralia1 + ee + dot + f + Aus + g + percentAustralia3 + ee + h + i + percentAustralia2 + j + dot);
//# sourceMappingURL=typescript.js.map