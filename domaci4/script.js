// hotel

var hotel = {
    naziv: "Hotel Park",
    adresa: "Novosadskog sajma 35",
    brojSoba: 140,
    rezervisano: 57,
    cenaNocenja: 7500,
    teretana: true,
    brojSlobodnihSoba: function () {
        return this.brojSoba - this.rezervisano;
    },
    brojRezervisanihSoba: function (brojSoba) {
        this.rezervisano += brojSoba;
    },
    cenaBoravka: function (brojNocenja) {
        return this.cenaNocenja * brojNocenja;
    },
    rezervacija: function (zeljeneRezervacije) {
        if(this.rezervisano + zeljeneRezervacije > this.brojSoba){
            console.log("Trenutno nema " + zeljeneRezervacije + " slobodnih soba");    
        } else
        console.log("Nastavite sa rezervacijom");
        
    },
    postotakSlobodnihSoba: function () {
        var procenatRezervisanih;
        return procenatRezervisanih = Math.round(1000 * this.brojSlobodnihSoba() / this.brojSoba) / 10;
    }
};

console.log("Cena boravka za zeljeni broj nocenja je: " + hotel.cenaBoravka(7));
hotel.brojRezervisanihSoba(82);
console.log("Trenutni broj rezervisanih soba: " + hotel.rezervisano);
hotel.rezervacija(14);

console.log("Slobodne sobe u procentima: " + hotel.postotakSlobodnihSoba());


document.write("Naziv: " + hotel.naziv + "<br>");
document.write("Adresa: " + hotel.adresa + "<br>");
document.write("Broj soba: " + hotel.brojSoba + "<br>");
if(hotel.brojSlobodnihSoba() > 0){
    document.write("Broj slobodnih soba: "+ hotel.brojSlobodnihSoba() + "<br>");
} else {
    document.write("Broj slobodnih soba: " + "<span>" + "Nema" + "</span>" + "<br>");
    var brSlob = document.querySelector("span");
    brSlob.style.color = "red";
}
document.write("Rezervisano: " + hotel.rezervisano + "<br>");
document.write("Slobodne sobe u procentima: " + hotel.postotakSlobodnihSoba() + "%" + "<br>");
document.write("Cena nocenja: "+ hotel.cenaNocenja + "din" + "<br>");
document.write("Teretana: "+ hotel.teretana+ "<br><br>");

//automobil

var auto = {
    marka: "Honda",
    model: "Civic",
    isTurnedOn: true,
    power: 182,
    color: "blue",
    turnOf: function () {
        this.isTurnedOn = false;
    },
    turnOn: function () {
        this.isTurnedOn = true;
    },
    paint: function (newColor) {
        this.color = newColor;
    }
}

auto.turnOf();
auto.paint("red");

document.write("Marka: " + auto.marka + "<br>");
document.write("Model: " + auto.model + "<br>");
document.write("Is turned on: " + auto.isTurnedOn + "<br>");
document.write("Power: " + auto.power + "<br>");
document.write("Color: "+ auto.color + "<br>");

