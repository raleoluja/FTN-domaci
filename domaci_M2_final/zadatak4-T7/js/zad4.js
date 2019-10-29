//Zadatak 4
// Napisati klasu Pas.
// Svaki pas ima ime, starost (u psećim godinama), podatak da li je vakcinisan i naziv rase.
// Napisati konstruktor (sa podrazumevanim vrednostima za parametre), gettere i settere.
// Psa je moguće vakcinisati, ispisati njegovu starost u ljudskim godinama*, ispisati sve podatke o psu. (napraviti metode za navedene funkcionalnosti)
// Kreirati posebnu Kennel klasu. Kennel klasa ima naziv, adresu, i niz Pasa.
// Napisati konstruktor koji kao parametre prima samo naziv i adresu.
// Implementirati getere i setere, kao i metodu za dodavanje pasa u niz.
// (Prilikom testiranja u taj niz dodati barem 7 pasa). Implementirati metode koje omogucuju sledece funkcionalnosti: 
// 	-pronaći najstarijeg psa
// 	-pronaci najmladjeg psa
// 	-ispisati imena vakcinisanih pasa.
// *Napomena: Jedna pseća godina je 7 ljudskih.
var Pas = /** @class */ (function () {
    function Pas(ime, starost, vakcinisan, rasa) {
        this._ime = ime;
        this._starost = starost;
        this._vakcinisan = vakcinisan;
        this._rasa = rasa;
    }
    Object.defineProperty(Pas.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "starost", {
        get: function () {
            return this._starost;
        },
        set: function (value) {
            this._starost = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "vakcinisan", {
        get: function () {
            return this._vakcinisan;
        },
        set: function (value) {
            this._vakcinisan = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pas.prototype, "rasa", {
        get: function () {
            return this._rasa;
        },
        set: function (value) {
            this._rasa = value;
        },
        enumerable: true,
        configurable: true
    });
    Pas.prototype.vakcinisi = function () {
        this._vakcinisan = true;
    };
    Pas.prototype.starostLjudskeGodine = function () {
        return this._starost * 7;
    };
    Pas.prototype.ispisPodatakaPas = function () {
        console.log("Ime pas: " + this._ime + ", starost: " + this._starost + ", vakcinisan: " + ((this._vakcinisan) ? 'DA' : 'NE') + " , rasa: " + this._rasa);
    };
    return Pas;
}());
var Kennel = /** @class */ (function () {
    function Kennel(ime, adresa) {
        this._ime = ime;
        this._adresa = adresa;
        this._psi = [];
    }
    Object.defineProperty(Kennel.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Kennel.prototype, "psi", {
        get: function () {
            return this._psi;
        },
        set: function (value) {
            this._psi = value;
        },
        enumerable: true,
        configurable: true
    });
    Kennel.prototype.dodajPsa = function (value) {
        this._psi.push(value);
    };
    Kennel.prototype.pronadjiNajstarijeg = function () {
        return this._psi.reduce(function (pr, pas) {
            if (pr.starost >= pas.starost)
                return pr;
            else
                return pas;
        });
    };
    Kennel.prototype.pronadjiNajmladjeg = function () {
        return this._psi.reduce(function (pr, pas) {
            if (pr.starost <= pas.starost)
                return pr;
            else
                return pas;
        });
    };
    Kennel.prototype.ispisiVakcinisane = function () {
        console.log("Vakcinisani psi: ");
        for (var _i = 0, _a = this._psi; _i < _a.length; _i++) {
            var pas = _a[_i];
            if (pas.vakcinisan)
                console.log("" + pas.ime);
        }
    };
    return Kennel;
}());
var p1 = new Pas("Vucko", 1, false, "Sarplaninac");
var p2 = new Pas("Lajka", 3, true, "Mongrel-Husky-Terrier");
var p3 = new Pas("Rex", 2, false, "Pulin");
var p4 = new Pas("Lesi", 5, true, "Skotski ovcar");
var p5 = new Pas("Beethoven", 2, true, "Bernardinac");
var p6 = new Pas("Snoopy", 68, true, "Dodž");
var p7 = new Pas("Scooby Doo", 48, true, "Nemacka doga");
var k = new Kennel("Kennel", "Neka adresa");
k.psi = [p1, p2, p3, p4, p5, p6, p7];
p1.ispisPodatakaPas();
console.log("-------------------Najmladji----------------");
var pNM = k.pronadjiNajmladjeg();
console.log("Najmladji: " + pNM.ime + " (" + pNM.starost + ")");
pNM.starostLjudskeGodine();
console.log("-------------------Najstariji----------------");
var pNS = k.pronadjiNajstarijeg();
console.log("Najsatriji: " + pNS.ime + " (" + pNS.starost + ")");
pNS.starostLjudskeGodine();
console.log("-------------------Vakcinisani----------------");
k.ispisiVakcinisane();
console.log("-------------------Vakcinisani 2----------------");
p3.vakcinisi();
k.ispisiVakcinisane();
//# sourceMappingURL=zad4.js.map