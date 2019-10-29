var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Radnik = /** @class */ (function () {
    function Radnik(ime, starost, onsovicaPlata) {
        this._ime = ime;
        this._starost = starost;
        this._onsovicaPlata = onsovicaPlata;
    }
    Object.defineProperty(Radnik.prototype, "plata", {
        get: function () {
            return this._onsovicaPlata;
        },
        enumerable: true,
        configurable: true
    });
    Radnik.prototype.godinaRodjenja = function () {
        var datum = new Date();
        var godina = datum.getFullYear();
        return godina - this._starost;
    };
    return Radnik;
}());
var Tehnicar = /** @class */ (function (_super) {
    __extends(Tehnicar, _super);
    function Tehnicar(ime, starost, onsovicaPlata) {
        return _super.call(this, ime, starost, onsovicaPlata) || this;
    }
    return Tehnicar;
}(Radnik));
var Inzenjer = /** @class */ (function (_super) {
    __extends(Inzenjer, _super);
    function Inzenjer(ime, starost, onsovicaPlata) {
        return _super.call(this, ime, starost, onsovicaPlata) || this;
    }
    Object.defineProperty(Inzenjer.prototype, "plata", {
        get: function () {
            return Math.round(this._onsovicaPlata * 1.12);
        },
        enumerable: true,
        configurable: true
    });
    return Inzenjer;
}(Radnik));
var Doktor = /** @class */ (function (_super) {
    __extends(Doktor, _super);
    function Doktor(ime, starost, onsovicaPlata) {
        return _super.call(this, ime, starost, onsovicaPlata) || this;
    }
    Object.defineProperty(Doktor.prototype, "plata", {
        get: function () {
            return Math.round(this._onsovicaPlata * 1.13);
        },
        enumerable: true,
        configurable: true
    });
    return Doktor;
}(Radnik));
var radnici = [];
var o1 = new Tehnicar("Pera", 23, 100);
var o2 = new Inzenjer("Mika", 29, 100);
var o3 = new Doktor("Doca", 35, 100);
radnici = [o1, o2, o3];
console.log(o1._ime + " " + o1.plata);
console.log(o2._ime + " " + o2.plata);
console.log(o3._ime + " " + o3.plata);
//zadatak3
function srednjaVrednostGodina(radnici) {
    return radnici.reduce(function (pre, el, index, array) { return pre + (el._starost / array.length); }, 0);
}
console.log(srednjaVrednostGodina(radnici));
//zadatak4
for (var _i = 0, radnici_1 = radnici; _i < radnici_1.length; _i++) {
    var iter = radnici_1[_i];
    console.log("Radnik " + iter._ime + " je " + iter.godinaRodjenja() + " godiste.");
}
//# sourceMappingURL=script.js.map