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

let studenti: Student[] = [];

class Predmet{
    private _id: number;
    private _naziv: string;
    private _profesor: string;
    private _ocena: number;


	constructor(id: number, naziv: string, profesor: string, ocena: number) {
		this._id = id;
		this._naziv = naziv;
		this._profesor = profesor;
		this._ocena = ocena;
    }
    

	public get id(): number {
		return this._id;
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get profesor(): string {
		return this._profesor;
	}

	public set id(value: number) {
		this._id = value;
	}


	public set naziv(value: string) {
		this._naziv = value;
	}


	public set profesor(value: string) {
		this._profesor = value;
	}


	public set ocena(value: number) {
		this._ocena = value;
    }
    
    public get ocena(): number{
        return this._ocena;
    }

}

class Student{
    private _ime: string;
    private _prezime: string;
    private _fakultet: string;
    private _indeks: string;
    private _prosecnaOcena: number;
    private _polozeniPredmeti: Predmet[];


	constructor(ime: string, prezime: string, fakultet: string, indeks: string) {
		this._ime = ime;
		this._prezime = prezime;
		this._fakultet = fakultet;
		this._indeks = indeks;
		this._prosecnaOcena = 0;
		this._polozeniPredmeti = [];
	}


	public get ime(): string {
		return this._ime;
	}

	public get prezime(): string {
		return this._prezime;
	}

	public get fakultet(): string {
		return this._fakultet;
	}

	public get indeks(): string {
		return this._indeks;
	}

	public get prosecnaOcena(): number {
		return this._prosecnaOcena;
	}

	public get polozeniPredmeti(): Predmet[] {
		return this._polozeniPredmeti;
	}

	public set ime(value: string) {
		this._ime = value;
	}

	public set prezime(value: string) {
		this._prezime = value;
	}

	public set fakultet(value: string) {
		this._fakultet = value;
	}

	public set indeks(value: string) {
		this._indeks = value;
	}

	public set prosecnaOcena(value: number) {
		this._prosecnaOcena = value;
	}

	public set polozeniPredmeti(value: Predmet[]) {
        this._polozeniPredmeti = value;
        this.izracunajProsecnuOcenu();
    }
    
    public dodajPredmet(predmet: Predmet): void{
        this.polozeniPredmeti.push(predmet);
        this.izracunajProsecnuOcenu();
    }

    public predstaviSe(): string{
        return (`Ja sam ${this._ime} ${this._prezime} i studiram na ${this._fakultet}, sa prosecnom ocenom ${this._prosecnaOcena}`);
        
    }

    public izracunajProsecnuOcenu(): void{
        this._prosecnaOcena = this._polozeniPredmeti.reduce((pr, element, indeks, array) => {
            return pr + (element.ocena / array.length);
        }, 0);
    }

    public omiljeniProfesor(): string[]{
        return  this._polozeniPredmeti.filter(el => el.ocena == 11)
                                        .map(el => el.profesor);
    }
}

let s1: Student = new Student("Pera", "Peric", "FTN", "PP-001");
let s1p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 9);
let s1p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s1p3: Predmet = new Predmet(3, "Predmet 3", "Predavac Predavacevic", 9);
let s1p4: Predmet = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 10);
s1.polozeniPredmeti = [s1p1, s1p2, s1p3, s1p4];

let s2: Student = new Student("Mika", "Mikic", "FTN", "MM-001");
let s2p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
let s2p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 9);
let s2p4: Predmet = new Predmet(4, "Predmet 4", "Doktor Doktorevic", 11);
s2.polozeniPredmeti = [s2p1, s2p2, s2p4];

let s3: Student = new Student("Ana", "Anaic", "FTN", "AA-001");
let s3p1: Predmet = new Predmet(1, "Predmet 1", "Profesor Profesorevic", 11);
let s3p2: Predmet = new Predmet(2, "Predmet 2", "Nastavnik Nastavnikovic", 10);
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

window.onload = function(){
    document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
        event.preventDefault();
        let ime: string = (document.getElementById("ime")as HTMLInputElement).value;
        let prezime: string =(document.getElementById("prezime")as HTMLInputElement).value;
        let fakultet: string =(document.getElementById("fakultet")as HTMLInputElement).value;
        let indeks: string = (document.getElementById("indeks")as HTMLInputElement).value;
        let predmeti: string = (document.getElementById("predmeti")as HTMLTextAreaElement).value;
        let tekst: HTMLDivElement = document.getElementById('tekst')as HTMLDivElement;
    
        let noviStudent = new Student(ime, prezime, fakultet, indeks);
    
        let pred: Predmet[] = [];
    
        let prededmetiSpli = predmeti.split(';');
        for(let k in prededmetiSpli){
            let pd: string[] = prededmetiSpli[k].split(',');
            let np: Predmet = new Predmet(Number(pd[0].trim()), pd[1].trim(), pd[2].trim(), Number(pd[3].trim()));
            pred.push(np);
        }

        noviStudent.polozeniPredmeti = pred;
        studenti.push(noviStudent);

        tekst.innerHTML = noviStudent.predstaviSe();

        document.getElementById('predstavi').addEventListener('click' , function () {
            tekst.innerHTML = "";

            for(let s of studenti){
                tekst.innerHTML += s.predstaviSe() + '<br>';
            }
        });

        document.getElementById('devetke').addEventListener('click', function () {
            tekst.innerHTML = '';

            let devetkasi: Student[] = devetke(studenti);
            for(let s of devetkasi){
                tekst.innerHTML += s.predstaviSe() + '<br>'; 
            }

            console.log(devetke(studenti));
        });

        document.getElementById('omiljeni').addEventListener('click' , function () {
            tekst.innerHTML = '';

            for(let s of studenti){
                if(s.omiljeniProfesor().length > 0){
                    tekst.innerHTML += s.ime + ' ' + s.prezime + ' Ima omiljene profesore: ' + s.omiljeniProfesor().join(', ')  + '<br>';
                }
            }
        });
        

    })
}

//Zadatak 8 
// Napisati funkciju koja prolazi kroz niz studenata i vraca one koje imaju barem 3 ocene 9.

function devetke(studenti:Student[]):Student[] {
    return studenti.filter(st =>{
        let brojDevetki = st.polozeniPredmeti.filter(el => el.ocena == 9).length;
        return brojDevetki >=3;
    });
}



//Zadatak 9
// Implementirati funkcionalnosti za dugmice:
// 	-"Predstavi sve studente" - prolazi se kroz niz studenata i rezultat metode predstaviSe se upisuje u div #tekst za svakog studenta
// 	-"Predstavi devetke" - ispisuje rezultat metode predstaviSe za studente koje pronalazi funkcija iz zadatka 8 (logovati u konzolu te objekte)
// 	-"Studenti sa omiljenim profesorima" - prolazi kroz niz studenata i upisuje njihovo ime i prezime i omiljene profesore npr. "Pera Peric ima 
//  omiljene profesore NazivProfesroa, Naziv profesora." (ovo odraditi samo za studente koji imaju omiljene profesore)