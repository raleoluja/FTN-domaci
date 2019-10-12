var zbr = 0;

function brojac() {
    zbr++;
    console.log('\n' + '-------------------------------------------------------' + 
    '\n' + 'zadatak ' + zbr + '\n' + 
    '-------------------------------------------------------' + '\n\n');
}

//zadatak1
brojac();

var matrica = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

var zbir = 0;

for(var i in matrica){
    for(var j = 0; j < matrica[i].length;j++){
        if( i == j){
            zbir += matrica[i][j];
        }else if(j == matrica[i].length - 1 - i ){
            zbir += matrica[i][j];
        }
    }
}

console.log('Zbir (bez dupliranja srednjeg) elemenata sa obe dijagonale matrice je: ' + zbir);

var zbir = 0;

for(var i = 0; i < matrica.length; i++){
    if(matrica[i][i]){
        zbir += matrica[i][i];
    }
}

for(var i = 0; i < matrica.length;i++){
    if(matrica[i][matrica.length - i - 1]){
        zbir += matrica[i][matrica.length - i - 1];
    }
}

console.log('Zbir SVIH elemenata sa obe dijagonale matrice je: ' + zbir);

//zadatak2
brojac();

var m = [
    [1, 2, 3, 5],
    [4, 5, 6, 8],
    [7, 8, 9, 9],
    [8, 5, 3, 1]
];

var zbir = 0;

for(var i = 0; i < m[2].length; i++){
    if(m[2][i]){
        zbir += m[2][i];
    }if(m[i][1]){
        zbir += m[i][1];
    }
}

console.log("Zbir vrednosti elemenata iz druge kolone i treceg reda: " + zbir);

//zadatak3
brojac();

var zbir = 0;

for(var i in m){
    for(var j = 0; j < m[i].length; j++){
        if(m[i][j] % 2 == 0){
            zbir += m[i][j];
        }
    }
}

console.log("Zbir parnih elemenata u matrici je: " + zbir);

//zadatak4
brojac();

var m = [
    [1,	2, 3, 5], 
    [3,	5, 6, 8],
	[7,	8, 9, 3],
    [8,	5, 3, 1]
];

for(var i in m){
    for(var j = 0; j < m[i].length; j++){
        if(m[i][j] == 3){
            m[i][j] = 0;
        }else if(m[i][j] == 5){
            m[i][j] = -1;
        }
    }
}

console.log(m);

//zadatak5
brojac();

var temp_farenhajt = 50;
var temp_celzijus = (temp_farenhajt - 32) * 5/9;

console.log(temp_farenhajt + "F" + " = " + temp_celzijus + "C");

//zadatak6
brojac();

for(var c = 0; c <= 100; c += 10){
    var f = c * 9/5 + 32;
    console.log(c + " C " + " - " + f + " F ");

}
