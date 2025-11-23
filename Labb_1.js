/****************************
GIK 339 Labb 1 - JavaScript intro, variabler och funktioner
Av: Jack Sandberg, h24jacas@du.se
Kurs: GIK339
Datum: 2024-11-23

*****************************/

/*Uppgift 2 - Variabler och scope */

console.log(task);
{
    var task = "Gå ut med hunden";
    let task2 = "Köpa mjölk";
    
    console.log(task2);

}
const task3 = "Städa rummet";
console.log(task3);

/*
*** REFLEKTIONSUPPGIFT 2 ***
var = fungerar utanför brackets 
let och const fungerar endast inom brackets. 

Innan blocket - I konsollen blir "task" undefined för att det inte är definierat än. 
I blocket - Inom blocket är det definierat och kan använas. 
Efter blocket - Efter blocket är "task" fortfarnade tillgängligt eftersom det är en var.
*** REFLEKTION ***
*/

/* UPPGIFT 3 - Jämförelse och specialvärden */
'3' ==  3; // true
3 === '3'; // false
console.log(3 != '3'); // false
console.log(3 !== '3'); // true
console.log(NaN == NaN); // false
console.log(NaN === NaN);   
console.log(null == undefined);
console.log(null === undefined);
console.log(undefined ? 'thruty': 'falsy');    

/* 
*** REFLEKTIONSUPPPGIFT 3 ***
Med '==' jämförs värdena efter typomvanlingen. 
Med '===' jämförs det utan någon typomvandling.

När man en ternary operator står för sig själv ger det alltid ett värde tillbaka. 
När man har en if sats skrivs det inte ut något värde tillbaka. 

NaN = står för Not a Number. 
undefined = ej deklarerad varibel. Alltså variabel som inte kan hittas. 
Null = ett värde som är tomt. fungerar som placeholder. 


*/ 

/* Uppgift 4 - Funktioner*/

/*Funktionsdeklaration */

function greet(name){
    return 'Hej, ${name}!';

}
let name = 'jack';
console.log(greet(name));
console.log(name);
console.log(greet('Anna'));


/*
*** REFLEKTIONSUPPGIFT 4 ***
1.funktionsdeklaration = ger namn åt en funktion med parameter
1. funktionsuttryck = lagrar en funktion i en variabel. eller tilldelar 
1. arrowfunction = är en förtkortat sätt att skriva funktioner på.

2. När jag anropar mina funktioner behöver jag tänka på vad de har för parametrar 
3. När jag ändra variabelnamnet name. 
    Om jag ändrar (innan) namet i funktionen ändras bara det i funktionen
    om jag ändrar utanför (efter)funktionen påverkas alla ställen där den använäds.
    
4. Parameter = En parameter är namnet på det jag skickar in i en funktion. 
4. variabel = Ett namn jag tilldelar ett värde. 
4. argument = Värdet jag skickar med i en funktion


* */
