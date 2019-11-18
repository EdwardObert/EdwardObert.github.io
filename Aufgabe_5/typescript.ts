//2018

var emissionAfrica18:number = 1235.5;
var emissionSouthAmerica18:number = 1261.5;
var emissionEurope18:number = 4209.3;
var emissionNorthAmerica18:number = 6035.6;
var emissionAsia18:number = 16274.1;
var emissionAustralia18:number = 2100.5

var emissiontotal18:number = emissionAfrica18 + emissionSouthAmerica18 + emissionEurope18 + emissionNorthAmerica18 + emissionAsia18 + emissionAustralia18;

//2008

var emissionAfrica8:number = 1028;
var emissionSouthAmerica8:number = 1132.6;
var emissionEurope8:number = 4965.7;
var emissionNorthAmerica8:number = 6600.4;
var emissionAsia8:number = 12954.7;
var emissionAustralia8:number = 1993;

var emissiontotal8:number = emissionAfrica8 + emissionSouthAmerica8 + emissionEurope8 + emissionNorthAmerica8 + emissionAsia8 + emissionAustralia8

//Prozente Afrika

var percentAfrica1:number = emissionAfrica18 * 100 / emissiontotal18;
var percentAfrica2:number = emissionAfrica18 - emissionAfrica8;
var percentAfrica3:number = percentAfrica2 / emissionAfrica8 * 100;

//Prozente South America

var percentSouthAmerica1:number = emissionSouthAmerica18 * 100 / emissiontotal18;
var percentSouthAmerica2:number = emissionSouthAmerica18 - emissionSouthAmerica8;
var percentSouthAmerica3:number = percentAfrica2 / emissionSouthAmerica8 * 100;

//Prozente Europa

var percentEurope1:number = emissionEurope18 * 100 / emissiontotal18;
var percentEurope2:number = emissionEurope18 - emissionEurope8;
var percentEurope3:number = percentEurope2 / emissionEurope8 * 100;

//Prozente NorthAmercia

var percentNorthAmerica1:number = emissionNorthAmerica18 * 100 / emissiontotal18;
var percentNorthAmerica2:number = emissionNorthAmerica18 - emissionNorthAmerica8;
var percentNorthAmerica3:number = percentNorthAmerica2 / emissionNorthAmerica8 * 100;

//Prozente Asia

var percentAsia1:number = emissionAsia18 * 100 / emissiontotal18;
var percentAsia2:number = emissionAsia18 - emissionAsia8;
var percentAsia3:number = percentAsia2 / emissionAsia8 * 100;

// Prozente Australianien

var percentAustralia1:number = emissionAustralia18 * 100 / emissiontotal18;
var percentAustralia2:number = emissionAustralia18 - emissionAustralia8;
var percentAustralia3:number = percentAustralia2 / emissionAustralia8 * 100;

//Sätze

var a= "Die Emission von " ;
var b= "ist: ";
var c= "kg CO2. ";
var d= "Relativ zur Gesamtemission der Welt verursacht ";
var e= "damit ";
var ee= "% ";
var f= "Für ";
var g= "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var h= "verändert. ";
var i= "2018 im Vergleich zu 2008 sind das ";
var j= "kg CO2";

var Afr = "Afrika ";
var SA= "Süd Amerika ";
var E= "Europa ";
var NA= "Nord Amerika ";
var As= "Asien ";
var Aus="Australien ";
var dot= "."

// Console

console.log (a + Afr + b + emissionAfrica18 + c + d + Afr + e + percentAfrica1+ ee+ dot + f + Afr + g + percentAfrica3 + ee + h + i + percentAfrica2 + j + dot)

console.log (a + SA + b + emissionSouthAmerica18 + c + d + SA + e + percentSouthAmerica1 + ee + dot + f + SA + g + percentSouthAmerica3 + ee + h + i + percentSouthAmerica2 + j + dot)

console.log (a + E + b + emissionEurope18 + c + d + E + e + percentEurope1 + ee + dot + f + E + g + percentEurope3 + ee + h + i + percentEurope2 + j + dot)

console.log (a + NA + b + emissionNorthAmerica18 + c + d + NA + e + percentNorthAmerica1 + ee + dot + f + NA + g + percentNorthAmerica3 + ee + h + i + percentNorthAmerica2 + j + dot)

console.log (a + As + b + emissionAsia18 + c + d + As + e + percentAsia1 + ee + dot + f + As + g + percentAsia3 + ee + h + i + percentAsia2 + j + dot)

console.log (a + Aus + b + emissionAustralia18 + c + d + Aus + e + percentAustralia1 + ee + dot + f + Aus + g + percentAustralia3 + ee + h + i + percentAustralia2 + j + dot)

