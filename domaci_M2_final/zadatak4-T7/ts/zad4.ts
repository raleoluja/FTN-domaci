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

class Pas{
    private _ime: string;
    private _starost: number;
    private _vakcinisan: boolean;
    private _rasa: string;


	constructor(ime: string, starost: number, vakcinisan: boolean, rasa: string) {
		this._ime = ime;
		this._starost = starost;
		this._vakcinisan = vakcinisan;
		this._rasa = rasa;
	}


	public get ime(): string {
		return this._ime;
	}

	public get starost(): number {
		return this._starost;
	}

	public get vakcinisan(): boolean {
		return this._vakcinisan;
	}

	public get rasa(): string {
		return this._rasa;
	}

	public set ime(value: string) {
		this._ime = value;
	}

	public set starost(value: number) {
		this._starost = value;
	}

	public set vakcinisan(value: boolean) {
		this._vakcinisan = value;
	}

	public set rasa(value: string) {
		this._rasa = value;
    }
    
    public vakcinisi(): void{
        this._vakcinisan = true;
    }

    public starostLjudskeGodine(): number {
        return this._starost * 7;
    }

    public ispisPodatakaPas(): void {
        console.log(`Ime pas: ${this._ime}, starost: ${this._starost}, vakcinisan: ${(this._vakcinisan)? 'DA': 'NE'} , rasa: ${this._rasa}`);
        
    }

}


class Kennel{
    private _ime: string;
    private _adresa: string;
    private _psi: Pas[];


	constructor(ime: string, adresa: string) {
        this._ime = ime;
        this._adresa = adresa;
        this._psi = [];
    }
    

	public get ime(): string {
		return this._ime;
	}


	public get adresa(): string {
		return this._adresa;
	}


	public get psi(): Pas[] {
		return this._psi;
	}


	public set ime(value: string) {
		this._ime = value;
	}


	public set adresa(value: string) {
		this._adresa = value;
	}


	public set psi(value: Pas[]) {
		this._psi = value;
	}

    public dodajPsa(value: Pas): void{
        this._psi.push(value);
    }

    public pronadjiNajstarijeg(): Pas{
        return this._psi.reduce((pr, pas) => {
            if(pr.starost >= pas.starost)
                return pr;
            else
                return pas;
        });
    }

    public pronadjiNajmladjeg(): Pas{
        return this._psi.reduce((pr, pas) => {
            if(pr.starost <= pas.starost)
                return pr;
            else
                return pas;
        });
    }

    public ispisiVakcinisane(): void{
        console.log(`Vakcinisani psi: `);
        
         for(let pas of this._psi){
            if(pas.vakcinisan)
            console.log(`${pas.ime}`);
            
         }
        
    }

}

let p1: Pas = new Pas("Vucko", 1, false, "Sarplaninac");
let p2: Pas = new Pas("Lajka", 3, true, "Mongrel-Husky-Terrier");
let p3: Pas = new Pas("Rex", 2, false, "Pulin" );
let p4: Pas = new Pas("Lesi", 5, true, "Skotski ovcar");
let p5: Pas = new Pas("Beethoven", 2, true, "Bernardinac");
let p6: Pas = new Pas("Snoopy", 68, true, "Dodž");
let p7: Pas = new Pas("Scooby Doo", 48, true, "Nemacka doga");

let k: Kennel = new Kennel("Kennel", "Neka adresa");
k.psi = [p1, p2, p3, p4, p5, p6, p7];


p1.ispisPodatakaPas();
console.log("-------------------Najmladji----------------")
let pNM = k.pronadjiNajmladjeg();
console.log(`Najmladji: ${pNM.ime} (${pNM.starost})`);
pNM.starostLjudskeGodine();
console.log("-------------------Najstariji----------------")
let pNS = k.pronadjiNajstarijeg();
console.log(`Najsatriji: ${pNS.ime} (${pNS.starost})`);
pNS.starostLjudskeGodine();
console.log("-------------------Vakcinisani----------------")
k.ispisiVakcinisane();

console.log("-------------------Vakcinisani 2----------------")
p3.vakcinisi();
k.ispisiVakcinisane();