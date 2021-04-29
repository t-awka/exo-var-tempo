let a = 1;
let b = 2;
let c = 3;
let temp;

temp = a; //=1
a = b; //=2
b = c; //=3
c = temp; //=1
console.log(a,b,c);

//exo1
//Afficher 4, 3, 2, 1
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let temp;

temp = a; //1
a = d; //4
d = temp; //1
temp = b; //2
b = c; //3
c = temp; //2

// // temp = a; methode hashimoto =1
// // a = c; =3
// // c = b; =2
// // b = a; =3
// // a = d; =4
// // d = temp; =1
console.log(a,b,c,d);

//exo2
let a = 1; 
let b = 2;
let c = 3;
let d = 4;
let temp;

temp = a;
a = b;
b = c;
c = d;
d = temp;
console.log(a,b,c,d);

//exo3
let tableau = [1, 2, 3, 4];
let temp;

temp = tableau[0];
tableau[0] = tableau[3];
tableau[3] = temp;
temp = tableau[1];
tableau[1] = tableau[2];
tableau[2] = temp;

console.log(tableau);

//exo4
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;
let f = 6;
let temp;

temp = b;
b = e;
e = f;
f = c;
c = a;
a = d;
d = temp;
console.log(a,b,c,d,e,f);
