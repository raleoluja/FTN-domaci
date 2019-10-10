var zbr = 0;

function razmak(zbr) {
    console.log('\n' + '-------------------------------------------------------' + '\n' + 'zadatak ' + zbr + '\n' + '-------------------------------------------------------');
}

//zadatak1
zbr++;
razmak(zbr);

//a

var x = 3;
var y = -4;
var z = x - y;

if(x + y > 0){
    console.log('Zbir prve dve je ceo broj');
} else if(x - y > 0){
        console.log('Razlika prve dve je pozitivan broj');
}

//b

if(x * z > 15 && y < 0){
console.log('Proizvod prve i trece je veci od 15 i druga varijable je negativna');
} else if(x * y > 15 || y > 0){
    console.log('Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna');
    
}

//zadatak2
zbr++;
razmak(zbr);

var x = 22;

switch(x){
    case 1:
    case 2:
    case 3: 
    case 4:
    case 5:
            console.log('Zadata vrednost je izmedju 1 i 5 i zadata vrednost je ' + x);
            break;
    case 8:
    case 9:
    case 10:
        console.log('Zadata vrednost je izmedju 8 i 10');
    default:
        console.log('zadata vrednost nije u navedenom opsegu');        
}

//zadatak3
zbr++;
razmak(zbr);

var x = -7;
var y = 1;

while (x + y < 0) {
    y++;
    console.log('trenutno je y: ' + y);
    
}

//zadatak4
zbr++;
razmak(zbr);

for(var i = 1; i <= 10; i ++){
    if(i % 2 == 0){
        console.log(i);
        
    } 
}

//zadatak5
zbr++;
razmak(zbr);

var niz = ['saab', 'volvo', 'mercedes'];

for(var i = 0; i < niz.length; i++){
    console.log(niz[i]);
    
}

//zadatak6
zbr++;
razmak(zbr);



for(var i = 0; i < niz.length; i++){
    console.log(niz[i]);
    
    if( niz[i] == 'volvo'){
        break;
    }
}

//zadatak7
zbr++;
razmak(zbr);

for(var i = 0; i < niz.length; i++){
    if(niz[i] == 'volvo'){
        continue;
    }
    console.log(niz[i]);
    
}

//zadatak8
zbr++;
razmak(zbr);

console.log('Brojevi deljivi sa 3: ');

for(var i = 1; i <= 20; i++){
    if(i % 3 == 0){
        console.log(i); 
    }
}

//zadatak9
zbr++;
razmak(zbr);

var brojevi = [ 1, 3, 44, 23, 11];
var zbir = 0;

for(var i = 0; i < brojevi.length; i++){
    zbir += brojevi[i];
    
}

var srednja_vrednost = zbir / brojevi.length;
console.log('Srednja vrednost je: ' + srednja_vrednost);

//zadatak10
zbr++;
razmak(zbr);

var niz_brojeva = [1, 2, 7, 5, 21];

var da = false;

for(var i = 0; i < niz_brojeva.length; i++){
    if(niz_brojeva[i] == 5){
        da = true;
        break;
    }else{
        da = false;
    }
}

if (da == true){
    console.log('U datom nizu se nalazi broj 5');
}else{
    console.log('U datom nizu NE nalazi broj 5');
}

//zadatak11
zbr++;
razmak(zbr);

var simetricni_niz = [2, 7, 9, 9, 7, 2,];


if(simetricni_niz.length % 2 == 0){

    var jeste = true;
    
    for(var i = 0; i < simetricni_niz.length / 2; i++){
        console.log('1: ' + simetricni_niz[i]);
        console.log('2: ' + simetricni_niz[simetricni_niz.length-1-i]);
        
        if(simetricni_niz[i] != simetricni_niz[simetricni_niz.length-1-i]){
            jeste = false;
            break;
        }
        jeste = true;
    }
    
    if(jeste == true){
        console.log('Niz JE simetrican!!!');
        
    }else{
        console.log('Zadati niz NIJE simetrican!');
    }
    
    
    
}else{
    console.log('Zadati niz NIJE simetrican!');
    
}

//zadatak12
zbr++;
razmak(zbr);

var matrica = [
    [0, 1, 0], 
    [2, 0, 1],
    [0, 0, 0]
];



console.log('Ukupan broj nula po redovima je: ');

for(var i = 0; i < matrica.length; i++){
    var br_nula = 0; // svaki novi red broji od 0
    for(var j = 0; j < matrica[i].length; j++){
        if(matrica[i][j] == 0){
            br_nula++;
        }
        
    }
    console.log(br_nula); // ispisuje broj nula za svaki red
    
}

//zadatak13
zbr++;
razmak(zbr);

var decimalni_brojevi = [ 0.3, 1.4, 0.1, 3.3, 23.1, 3.1];

var max = 0;
for(var i = 0; i < decimalni_brojevi.length; i++){
    if(decimalni_brojevi[i] > max){
        max = decimalni_brojevi[i];
    }
}

console.log('Najveci broj niza je: ' + max);

//zadatak14
zbr++;
razmak(zbr);

var min = decimalni_brojevi[0];
for(var i = 1; i < decimalni_brojevi.length; i++){
    if(decimalni_brojevi[i] < min){
        min = decimalni_brojevi[i];
    }
}

console.log('Najmanji broj niza je: ' + min);

//zadatak15
zbr++;
razmak(zbr);

var matrica =[
    [1, 3, 6],
    [0, 3, 1],
    [33, 2, 10]
];

var max = 0;

for(var i = 0; i < matrica.length; i++){
    for(var j = 0; j < matrica[i].length;j++){
        if(i == j){
            if(matrica[i][j] > max){
                max = matrica[i][j];
            }
        }
        
    }
}

console.log('Najveci element dijagonale matrice: ' + max);

//zadatak16
zbr++;
razmak(zbr);


var mat = [];

var m = 5;
var n = 6;

for(var i = 0; i < m; i++){
    mat[i] = [];
    for(var j = 0; j < n; j++){
        mat[i][j] = j + 1;
    }
}

console.log(mat);
