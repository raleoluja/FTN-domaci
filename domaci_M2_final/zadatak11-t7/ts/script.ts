class Namestaj{
    private _sifra: number;
    private _naziv: string;
    private _jedinicnaCena: number;
    private _kolicinaUMagacinu: number;


	constructor(sifra: number, naziv: string, jedinicnaCena: number, kolicinaUMagacinu: number) {
		this._sifra = sifra;
		this._naziv = naziv;
		this._jedinicnaCena = jedinicnaCena;
		this._kolicinaUMagacinu = kolicinaUMagacinu;
	}


	public get sifra(): number {
		return this._sifra;
	}

	public get naziv(): string {
		return this._naziv;
	}

	public get jedinicnaCena(): number {
		return this._jedinicnaCena;
	}

	public get kolicinaUMagacinu(): number {
		return this._kolicinaUMagacinu;
	}

	public set sifra(value: number) {
		this._sifra = value;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set jedinicnaCena(value: number) {
		this._jedinicnaCena = value;
	}

	public set kolicinaUMagacinu(value: number) {
		this._kolicinaUMagacinu = value;
	}

}

class Salon{
    private _naziv: string;
    private _adresa: string;
    private _telefon: string;
    private _namestaji: Namestaj[];


	constructor(naziv: string, adresa: string, telefon: string) {
		this._naziv = naziv;
		this._adresa = adresa;
		this._telefon = telefon;
		this._namestaji = [];
	}


	public get naziv(): string {
		return this._naziv;
	}

	public get adresa(): string {
		return this._adresa;
	}

	public get telefon(): string {
		return this._telefon;
	}

	public get namestaji(): Namestaj[] {
		return this._namestaji;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set adresa(value: string) {
		this._adresa = value;
	}

	public set telefon(value: string) {
		this._telefon = value;
	}

	public set namestaji(value: Namestaj[]) {
		this._namestaji = value;
	}

    public ispisiNamestajNaStanju(): void{
        if(this._namestaji.length > 0){
            for(let n in this.namestaji){
                console.log(`${Number(n) + 1}. ${this.namestaji[n].sifra} ${this.namestaji[n].naziv} ${this.namestaji[n].kolicinaUMagacinu} ${this.namestaji[n].jedinicnaCena}`);
                
            }
            
        }
        console.log(' ');
        
    }

    public dodajNaLager(sifra: number, komada: number): void{
        // this._namestaji.forEach(namestaj => {
        //     if (namestaj.sifra == sifra) {
        //         namestaj.kolicinaUMagacinu += komada;
        //     }
        // });
        let nizSaJednimEl: Namestaj[] = this._namestaji.filter(el => el.sifra == sifra);
        if (nizSaJednimEl.length > 0) {
            nizSaJednimEl[0].kolicinaUMagacinu += komada;
        }
    }

    public dodajNamestaj(namestaj: Namestaj):void{
        // for(let nam of this._namestaji){
        //     if(nam.sifra == namestaj.sifra){
        //         console.log(`Greska!!! Proizvod pod tom sivrom vec postoji u magacinu!`);
        //         return;
        //     }else {
        //         this._namestaji.push(namestaj);
        //         return;
        //     }
                
        // }
        if (this._namestaji.filter(el => el.sifra == namestaj.sifra).length > 0) {
            console.log(`Greska!!! Proizvod pod tom sifrom vec postoji u magacinu!`);
            return;
        } else {
            this._namestaji.push(namestaj);
            console.log(`Uspesno ste dodali ${namestaj.naziv} u magacin.`);
            return;
        }
    }

    public prodajKomad(sifra: number, komada: number): void{
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
        let nizSaJednimEl: Namestaj[] = this._namestaji.filter(el => el.sifra == sifra);
        if (nizSaJednimEl.length <= 0) {
            console.log(`Greska!!! Proizvod za ${sifra} ne postoji u magacinu!`);
            return;
        }else if (nizSaJednimEl.length > 0 &&  komada > nizSaJednimEl[0].kolicinaUMagacinu) {
            console.log(`Neuspesna kupovina, nema dovoljno proizvoda na stanju!`);
            return;
        } else {
            nizSaJednimEl[0].kolicinaUMagacinu -= komada;
            console.log(`Uspesno ste kupili ${komada} namestaja ${nizSaJednimEl[0].naziv} za ${nizSaJednimEl[0].jedinicnaCena * komada} RSD!`);
            return;
        }

    }
}

let n1: Namestaj = new Namestaj(111, "Ester Komoda", 50386.50, 15);
let n2: Namestaj = new Namestaj(123, "Rita Lezaj", 41127.12, 5);
let n3: Namestaj = new Namestaj(143, "Fiona Lezaj", 41127.12, 0);
let n4: Namestaj = new Namestaj(144, "Kloe Klub Sto", 20241, 2);

let s: Salon = new Salon("Simpo", "Bulevar Oslobodjenja BB", "021/000111");
s.namestaji = [n1, n2, n3, n4];
s.ispisiNamestajNaStanju();

s.dodajNaLager(3, 144);
s.dodajNaLager(123, 100);

s.ispisiNamestajNaStanju();

let n5: Namestaj = new Namestaj(254, "Fira Klub Sto", 30360.83, 11);
s.dodajNamestaj(n5);
s.ispisiNamestajNaStanju();
n5.sifra = 5;
s.dodajNamestaj(n5);

s.prodajKomad(111, 20);

s.prodajKomad(111, 11);
s.ispisiNamestajNaStanju();