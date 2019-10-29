class Radnik{
    public _ime: string;
    public _starost: number;
    public _onsovicaPlata: number;


	protected constructor(ime: string, starost: number, onsovicaPlata: number) {
		this._ime = ime;
		this._starost = starost;
		this._onsovicaPlata = onsovicaPlata;
	}

    get plata(): number {
        return this._onsovicaPlata;
    }

    public godinaRodjenja(): number{
        let datum = new Date();
        let godina = datum.getFullYear();
        return godina - this._starost;
    }

}

class Tehnicar extends Radnik{
    constructor(ime: string, starost: number, onsovicaPlata: number){
        super(ime, starost, onsovicaPlata);
    }
}

class Inzenjer extends Radnik{
    constructor(ime: string, starost: number, onsovicaPlata: number){
        super(ime, starost, onsovicaPlata);
    }

    get plata(): number{
        return Math.round(this._onsovicaPlata * 1.12);
    }
}

class Doktor extends Radnik{
    constructor(ime: string, starost: number, onsovicaPlata: number){
        super(ime, starost, onsovicaPlata);
    }

    get plata(): number {
        return Math.round(this._onsovicaPlata * 1.13);
    }
}

let radnici: Radnik[] = [];

let o1 = new Tehnicar("Pera", 23, 100);
let o2 = new Inzenjer("Mika", 29, 100);
let o3 = new Doktor("Doca", 35, 100);

radnici = [o1, o2, o3];

console.log(o1._ime + " " + o1.plata);
console.log(o2._ime + " " + o2.plata);
console.log(o3._ime + " " + o3.plata);

//zadatak3

function srednjaVrednostGodina(radnici: Radnik[]):number {
    return radnici.reduce((pre, el, index, array) =>  pre + (el._starost/array.length) , 0);
}

console.log(srednjaVrednostGodina(radnici));

//zadatak4
for(const iter of radnici){
    console.log(`Radnik ${iter._ime} je ${iter.godinaRodjenja()} godiste.`);
    
}


