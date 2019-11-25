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

// Aufgabe 6 shietz

//Opa opa hier ist Europa

function Eurofunk () {
document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in Europe";
document.querySelector("#Wert1").innerHTML= "" + emissionEurope18;
document.querySelector("#Wert1text").innerHTML="Emission absolute of Europe in 2018";
document.querySelector("#Wert2").innerHTML="" + percentEurope1;
document.querySelector("#Wert3").innerHTML="" + percentEurope3;
document.querySelector("#Wert4").innerHTML="" + percentEurope2;
document.querySelector(".chart").setAttribute('style', 'height:' + percentEurope1 + '%');
}

window.addEventListener('load', function () {
    document.querySelector('#Europa').addEventListener('click', Eurofunk);
});

//NordAmerikanianien

function NAfunk() {
    document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in North America";
    document.querySelector("#Wert1").innerHTML= "" + emissionNorthAmerica18;
    document.querySelector("#Wert1text").innerHTML="Emission absolute of North America in 2018";
    document.querySelector("#Wert2").innerHTML="" + percentNorthAmerica1;
    document.querySelector("#Wert3").innerHTML="" + percentNorthAmerica3;
    document.querySelector("#Wert4").innerHTML="" + percentNorthAmerica2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentNorthAmerica1 + '%');
    }
    
    window.addEventListener('load', function () {
        document.querySelector('#NA').addEventListener('click', NAfunk);
    });
    
    //Südamerikano

    function SAfunk() {
        document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in South America";
        document.querySelector("#Wert1").innerHTML= "" + emissionSouthAmerica18;
        document.querySelector("#Wert1text").innerHTML="Emission absolute of South America in 2018";
        document.querySelector("#Wert2").innerHTML="" + percentSouthAmerica1;
        document.querySelector("#Wert3").innerHTML="" + percentSouthAmerica3;
        document.querySelector("#Wert4").innerHTML="" + percentSouthAmerica2;
        document.querySelector(".chart").setAttribute('style', 'height:' + percentSouthAmerica1 + '%');
        }
        
        window.addEventListener('load', function () {
            document.querySelector('#SA').addEventListener('click', SAfunk);
        });
    

    //Africabambata

    function Afrofunk() {
        document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in Africa";
        document.querySelector("#Wert1").innerHTML= "" + emissionAfrica18;
        document.querySelector("#Wert1text").innerHTML="Emission absolute of Africa in 2018";
        document.querySelector("#Wert2").innerHTML="" + percentAfrica1;
        document.querySelector("#Wert3").innerHTML="" + percentAfrica3;
        document.querySelector("#Wert4").innerHTML="" + percentAfrica2;
        document.querySelector(".chart").setAttribute('style', 'height:' + percentAfrica1 + '%');
        }
        
        window.addEventListener('load', function () {
            document.querySelector('#Afrika').addEventListener('click', Afrofunk);
        });

//Azia evrazia

function Asiafunk() {
    document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in Asia";
    document.querySelector("#Wert1").innerHTML= "" + emissionAsia18;
    document.querySelector("#Wert1text").innerHTML="Emission absolute of Asia in 2018";
    document.querySelector("#Wert2").innerHTML="" + percentAsia1;
    document.querySelector("#Wert3").innerHTML="" + percentAsia3;
    document.querySelector("#Wert4").innerHTML="" + percentAsia2;
    document.querySelector(".chart").setAttribute('style', 'height:' + percentAsia1 + '%');
    }
    
    window.addEventListener('load', function () {
        document.querySelector('#Asia').addEventListener('click', Asiafunk);
    });


    //Australianien

    function Ausfunk() {
        document.querySelector("#Titel").innerHTML="Carbon Dioxide Emissions in Australia";
        document.querySelector("#Wert1").innerHTML= "" + emissionAustralia18;
        document.querySelector("#Wert1text").innerHTML="Emission absolute of Australia in 2018";
        document.querySelector("#Wert2").innerHTML="" + percentAustralia1;
        document.querySelector("#Wert3").innerHTML="" + percentAustralia3;
        document.querySelector("#Wert4").innerHTML="" + percentAustralia2;
        document.querySelector(".chart").setAttribute('style', 'height:' + percentAustralia1 + '%');
        }
        
        window.addEventListener('load', function () {
            document.querySelector('#Aus').addEventListener('click', Ausfunk);
        });
    
    
 //Balke alldoor
 
 
    

