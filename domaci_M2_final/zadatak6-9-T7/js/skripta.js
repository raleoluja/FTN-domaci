// Zadatak 6
// Dat je tekst zadataka koji je sličan zadatku 4 sa termina 3. 
// Zadatak implementirati upotrebom klasa. Na osvnovu datog teksta, odrediti kako klasa 
// koja treba da resi zadatak treba da izgleda. (na osvnovu objekta i niza odrediti atribute klase, na osnovu funkcija odrediti metode klase) 
// Data je struktura:
// var student = {
// 	ime: "Pera",
// 	prezime: "Peric",
// 	fakultet: "FTN",
// 	broj_indeksa: "RA-1"
// 	prosecna_ocena: 0
// };
// var ocene = [8, 7, 6, 9, 8, 10, 8]; //Posto koristimo klase, ocena bi trebalo da bude deo klase Predmet, pri cemu polozene predmete dodajemo u niz koji se nalazi u studentu.
// Predmet se sastoji od (id-ja, naziva predmeta, imena profesora, ocene)
// Za zadatog studenta dodati dve metode. Prva metoda se zove predstaviSe() i treba da vrati osnovne podatke o studentu, npr:
// "Ja sam Pera Peric i studiram na FTN, sa prosecnom ocenom ...(ocena)"
// Druga metoda se zove izracunajProsecnuOcenu(). Ta metoda racuna prosecnu ocenu i upisuje
// u atribut prosecna_ocena.
//Napraviti metodu omiljeni profesori koja vraca niz sa imenima profesora kod koga student ima ocenu 11.
var studenti = [];
var Predmet = /** @class */ (function () {
    function Predmet(id, naziv, profesor, ocena) {
        this._id = id;
        this._naziv = naziv;
        this._profesor = profesor;
        this._ocena = ocena;
    }
    Object.defineProperty(Predmet.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "profesor", {
        get: function () {
            return this._profesor;
        },
        set: function (value) {
            this._profesor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Predmet.prototype, "ocena", {
        get: function () {
            return this._ocena;
        },
        set: function (value) {
            this._ocena = value;
        },
        enumerable: true,
        configurable: true
    });
    return Predmet;
}());
var Student = /** @class */ (function () {
    function Student(ime, prezime, fakultet, indeks) {
        this._ime = ime;
        this._prezime = prezime;
        this._fakultet = fakultet;
        this._indeks = indeks;
        this._prosecnaOcena = 0;
        this._polozeniPredmeti = [];
    }
    Object.defineProperty(Student.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "fakultet", {
        get: function () {
            return this._fakultet;
        },
        set: function (value) {
            this._fakultet = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "indeks", {
        get: function () {
            return this._indeks;
        },
        set: function (value) {
            this._indeks = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "prosecnaOcena", {
        get: function () {
            return this._prosecnaOcena;
        },
        set: function (value) {
            this._prosecnaOcena = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "polozeniPredmeti", {
        get: function () {
            return this._polozeniPredmeti;
        },
        set: function (value) {
            this._polozeniPredmeti = value;
            this.izracunajProsecnuOcenu();
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.dodajPredmet = function (predmet) {
        this.polozeniPredmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    };
    Student.prototype.predstaviSe = function () {
        return ("Ja sam " + this._ime + " " + this._prezime + " i studiram na " + this._fakultet + ", sa prosecnom ocenom " + this._prosecnaOcena);
    };
    Student.prototype.izracunajProsecnuOcenu = function () {
        this._prosecnaOcena = this._polozeniPredmeti.reduce(function (pr, element, indeks, array) {
            return pr + (element.ocena / array.length);
        }, 0);
    };
    Student.prototype.omiljeniProfesor = function () {
        return this._polozeniPredmeti.filter(function (el) { return el.ocena == 11; })
            .map(function (el) { return el.profesor; });
    };
    return Student;
}());
var s1 = new Student("Pera", "Peric", "FTN", "PP-001");
var s1p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 9);
var s1p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s1p3 = new Predmet(3, "Predmet 3", "Predavac Predavacevic", 9);
var s1p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeniPredmeti = [s1p1, s1p2, s1p3, s1p4];
var s2 = new Student("Mika", "Mikic", "FTN", "MM-001");
var s2p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s2p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
var s2p4 = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeniPredmeti = [s2p1, s2p2, s2p4];
var s3 = new Student("Ana", "Anaic", "FTN", "AA-001");
var s3p1 = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
var s3p2 = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 10);
s3.dodajPredmet(s3p1);
s3.dodajPredmet(s3p2);
studenti.push(s1, s2, s3);
console.log(s1.predstaviSe());
console.log(s3.predstaviSe());
console.log(s1.predstaviSe());
console.log(s2.predstaviSe());
console.log(s2.omiljeniProfesor());
console.log(s3.omiljeniProfesor());
//Zadatak 7
// Omoguciti unos novih studenata putem forme kao i predstavljanje unetos studenta pomocu diva #tekst (u taj div se ispisuje rezultat poziva metode predstaviSe).
// Kako bi podrzali unos studenata putem forme, napraviti globalnu promenljivu studenti (niz studenata) na pocetku ts fajla.
// function dodaj(forma: HTMLFontElement): void {
//     let ime: string = (document.getElementById("ime")as HTMLInputElement).value;
//     let prezime: string =(document.getElementById("prezime")as HTMLInputElement).value;
//     let fakultet: string =(document.getElementById("fakultet")as HTMLInputElement).value;
//     let indeks: string = (document.getElementById("indeks")as HTMLInputElement).value;
//     let predmeti: string = (document.getElementById("predmet")as HTMLTextAreaElement).value;
//     let noviStudent = new Student(ime, prezime, fakultet, indeks);
//     let p: Predmet[] = [];
//     let pred = predmeti.split(';').map(el => el.split(','));
//     console.log(pred);
// }
window.onload = function () {
    document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
        event.preventDefault();
        var ime = document.getElementById("ime").value;
        var prezime = document.getElementById("prezime").value;
        var fakultet = document.getElementById("fakultet").value;
        var indeks = document.getElementById("indeks").value;
        var predmeti = document.getElementById("predmeti").value;
        var tekst = document.getElementById('tekst');
        var noviStudent = new Student(ime, prezime, fakultet, indeks);
        var pred = [];
        var prededmetiSpli = predmeti.split(';');
        for (var k in prededmetiSpli) {
            var pd = prededmetiSpli[k].split(',');
            var np = new Predmet(Number(pd[0].trim()), pd[1].trim(), pd[2].trim(), Number(pd[3].trim()));
            pred.push(np);
        }
        noviStudent.polozeniPredmeti = pred;
        studenti.push(noviStudent);
        tekst.innerHTML = noviStudent.predstaviSe();
        document.getElementById('predstavi').addEventListener('click', function () {
            tekst.innerHTML = "";
            for (var _i = 0, studenti_1 = studenti; _i < studenti_1.length; _i++) {
                var s = studenti_1[_i];
                tekst.innerHTML += s.predstaviSe() + '<br>';
            }
        });
        document.getElementById('devetke').addEventListener('click', function () {
            tekst.innerHTML = '';
            var devetkasi = devetke(studenti);
            for (var _i = 0, devetkasi_1 = devetkasi; _i < devetkasi_1.length; _i++) {
                var s = devetkasi_1[_i];
                tekst.innerHTML += s.predstaviSe() + '<br>';
            }
            console.log(devetke(studenti));
        });
        document.getElementById('omiljeni').addEventListener('click', function () {
            tekst.innerHTML = '';
            for (var _i = 0, studenti_2 = studenti; _i < studenti_2.length; _i++) {
                var s = studenti_2[_i];
                if (s.omiljeniProfesor().length > 0) {
                    tekst.innerHTML += s.ime + ' ' + s.prezime + ' Ima omiljene profesore: ' + s.omiljeniProfesor().join(', ') + '<br>';
                }
            }
        });
    });
};
//Zadatak 8 
// Napisati funkciju koja prolazi kroz niz studenata i vraca one koje imaju barem 3 ocene 9.
function devetke(studenti) {
    return studenti.filter(function (st) {
        var brojDevetki = st.polozeniPredmeti.filter(function (el) { return el.ocena == 9; }).length;
        return brojDevetki >= 3;
    });
}
//Zadatak 9
// Implementirati funkcionalnosti za dugmice:
// 	-"Predstavi sve studente" - prolazi se kroz niz studenata i rezultat metode predstaviSe se upisuje u div #tekst za svakog studenta
// 	-"Predstavi devetke" - ispisuje rezultat metode predstaviSe za studente koje pronalazi funkcija iz zadatka 8 (logovati u konzolu te objekte)
// 	-"Studenti sa omiljenim profesorima" - prolazi kroz niz studenata i upisuje njihovo ime i prezime i omiljene profesore npr. "Pera Peric ima 
//  omiljene profesore NazivProfesroa, Naziv profesora." (ovo odraditi samo za studente koji imaju omiljene profesore)
//# sourceMappingURL=skripta.js.map