var Namestaj = /** @class */ (function () {
    function Namestaj(sifra, naziv, jedinicnaCena, kolicinaUMagacinu) {
        this._sifra = sifra;
        this._naziv = naziv;
        this._jedinicnaCena = jedinicnaCena;
        this._kolicinaUMagacinu = kolicinaUMagacinu;
    }
    Object.defineProperty(Namestaj.prototype, "sifra", {
        get: function () {
            return this._sifra;
        },
        set: function (value) {
            this._sifra = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "jedinicnaCena", {
        get: function () {
            return this._jedinicnaCena;
        },
        set: function (value) {
            this._jedinicnaCena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Namestaj.prototype, "kolicinaUMagacinu", {
        get: function () {
            return this._kolicinaUMagacinu;
        },
        set: function (value) {
            this._kolicinaUMagacinu = value;
        },
        enumerable: true,
        configurable: true
    });
    return Namestaj;
}());
var Salon = /** @class */ (function () {
    function Salon(naziv, adresa, telefon) {
        this._naziv = naziv;
        this._adresa = adresa;
        this._telefon = telefon;
        this._namestaji = [];
    }
    Object.defineProperty(Salon.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "adresa", {
        get: function () {
            return this._adresa;
        },
        set: function (value) {
            this._adresa = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "telefon", {
        get: function () {
            return this._telefon;
        },
        set: function (value) {
            this._telefon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Salon.prototype, "namestaji", {
        get: function () {
            return this._namestaji;
        },
        set: function (value) {
            this._namestaji = value;
        },
        enumerable: true,
        configurable: true
    });
    Salon.prototype.ispisiNamestajNaStanju = function () {
        if (this._namestaji.length > 0) {
            for (var n in this.namestaji) {
                console.log(Number(n) + 1 + ". " + this.namestaji[n].sifra + " " + this.namestaji[n].naziv + " " + this.namestaji[n].kolicinaUMagacinu + " " + this.namestaji[n].jedinicnaCena);
            }
        }
        console.log(' ');
    };
    Salon.prototype.dodajNaLager = function (sifra, komada) {
        // this._namestaji.forEach(namestaj => {
        //     if (namestaj.sifra == sifra) {
        //         namestaj.kolicinaUMagacinu += komada;
        //     }
        // });
        var nizSaJednimEl = this._namestaji.filter(function (el) { return el.sifra == sifra; });
        if (nizSaJednimEl.length > 0) {
            nizSaJednimEl[0].kolicinaUMagacinu += komada;
        }
    };
    Salon.prototype.dodajNamestaj = function (namestaj) {
        // for(let nam of this._namestaji){
        //     if(nam.sifra == namestaj.sifra){
        //         console.log(`Greska!!! Proizvod pod tom sivrom vec postoji u magacinu!`);
        //         return;
        //     }else {
        //         this._namestaji.push(namestaj);
        //         return;
        //     }
        // }
        if (this._namestaji.filter(function (el) { return el.sifra == namestaj.sifra; }).length > 0) {
            console.log("Greska!!! Proizvod pod tom sifrom vec postoji u magacinu!");
            return;
        }
        else {
            this._namestaji.push(namestaj);
            console.log("Uspesno ste dodali " + namestaj.naziv + " u magacin.");
            return;
        }
    };
    Salon.prototype.prodajKomad = function (sifra, komada) {
        // for (const iterator of this._namestaji) {
        //     if(sifra != iterator.sifra){
        //         console.log(`Greska!!! Proizvod za ${sifra} ne pstoji u magacinu!`);
        //         return;
        //     } else if (sifra == iterator.sifra && komada > iterator.kolicinaUMagacinu){
        //         console.log(`Neuspesna kupovina, nema dovoljno proizvoda na stanju!`);
        //         return;
        //     } else {
        //         iterator.kolicinaUMagacinu -= komada;
        //         console.log(`Uspesno ste kupili ${komada} namestaja ${iterator.naziv} za ${iterator.jedinicnaCena * komada} RSD!`);
        //         return;
        //     }
        // }
        var nizSaJednimEl = this._namestaji.filter(function (el) { return el.sifra == sifra; });
        if (nizSaJednimEl.length <= 0) {
            console.log("Greska!!! Proizvod za " + sifra + " ne postoji u magacinu!");
            return;
        }
        else if (nizSaJednimEl.length > 0 && komada > nizSaJednimEl[0].kolicinaUMagacinu) {
            console.log("Neuspesna kupovina, nema dovoljno proizvoda na stanju!");
            return;
        }
        else {
            nizSaJednimEl[0].kolicinaUMagacinu -= komada;
            console.log("Uspesno ste kupili " + komada + " namestaja " + nizSaJednimEl[0].naziv + " za " + nizSaJednimEl[0].jedinicnaCena * komada + " RSD!");
            return;
        }
    };
    return Salon;
}());
var n1 = new Namestaj(111, "Ester Komoda", 50386.50, 15);
var n2 = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
var n3 = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
var n4 = new Namestaj(144, "Kloe Klub Sto", 20241, 2);
var s = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();
s.dodajNaLager(3, 144);
s.dodajNaLager(123, 100);
s.ispisiNamestajNaStanju();
var n5 = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);
s.ispisiNamestajNaStanju();
n5.sifra = 5;
s.dodajNamestaj(n5);
s.prodajKomad(111, 20);
s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();
//# sourceMappingURL=script.js.map