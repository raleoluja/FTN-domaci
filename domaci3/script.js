var zbr = 0;

function brojac() {
    zbr++;
    console.log('\n' + '-------------------------------------------------------' + '\n' + 'zadatak ' + zbr + '\n' + '-------------------------------------------------------');
}

//zadatak1
brojac();

var naslov = "Ovo je neki naslov";

function generisiNaslov(naslov) {
    for(var i = 1; i < 7; i++){
        document.write("<h" + i + ">" + naslov + "</h" + i + ">");
    }
}

generisiNaslov(naslov);

//zadatak2
brojac();

var x = 2;
var y = 4;

function generisiNaslovSaParametrima(x, z) {
    for(var i = x; i <= z; i ++){
        document.write("<h" + i + ">" + naslov + "</h" + i + ">");
    }
}

generisiNaslovSaParametrima(x, y);

//zadatak3
brojac();

var str1 = "Dobar dan";
var str2 = "Dobar";

function uporediStringove(str1, str2) {
    var strUNiz = str1.split(" ");
    
    var provera = strUNiz.indexOf(str2);
    if(provera < 0){
        return false;
    }
    return true;
}

console.log(uporediStringove(str1, str2));

//zadatak4
brojac();

var str1 = "Dobar dan";
var str2 = "dobar";

function uporediStr2(str1, str2) {
    var str1 = str1.toLowerCase();
    var str2 = str2.toLowerCase();
    
    var niz = str1.split(" ");
    var provera  = niz.indexOf(str2);
    if(provera < 0){
        return false;
    }
    return true;
}

console.log(uporediStr2(str1, str2));

//zadatak5
brojac();

var jmbg ="1411955412829";

function obradiJMBG(jmbg) {
    var dan = jmbg.substring(0,2);
    var mesec = jmbg.substring(2,4);
    var godina = 1 + jmbg.substring(4,7);
    var bbb = jmbg.substring(jmbg.length -4, jmbg.length-1);

    var pol = "";
    if(bbb < 500){
        pol = "muski";
    } else {
        pol = "zenski";
    }

    console.log("Datum rodjenja je: " + dan + "." + mesec + "." +
    godina + ". " + " pol: " + pol);
    
}

obradiJMBG(jmbg);

//zadatak6
brojac();

var url = '?ime=sinisa&prezime=mihajlovic';

function parseUrl(url) {

    var imep = url.split('?');
    var ime = imep[1].split('&')[0];
    var prezime = url.split('&')[1];
    console.log(ime + "\n" + prezime);
    
}

parseUrl(url);

//zadatak7
brojac();

var danas = new Date();
var dan = danas.getDay();

function kadCeVikend(dan) {
    var vikend = 5;
    var brDana = vikend - dan;
    return brDana;
}

console.log("Do vikenda ima jos " + kadCeVikend(dan) + " dana.");
