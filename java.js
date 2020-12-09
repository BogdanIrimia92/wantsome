// exercise 1 Scrieti o functie care verifica daca un input este sau nu de tip string

function is_string(string1) {
  if (typeof string1 === "string") return true;
  else return false;
}
console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));
is_string("w3resource");

// exercise 2 Scrieti o functie care verifica daca un string este gol sau nu

function is_Blank(input) {
  if (input.length === 0) return true;
  else return false;
}
console.log(is_Blank(""));
console.log(is_Blank("abc"));

// exercise 3 Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte

function myArray(name) {
  let myArray = "Robin Singh";
  let string_to_array = myArray.split(" ");
  console.log(string_to_array);
}
myArray("Robin Singh");

// exercise 4 Scrieti o functie care transforma un string in forma abreviata:

function abbrev_name(str1) {
  let split_names = str1.trim().split(" ");
  if (split_names.length > 1) {
    return split_names[0] + " " + split_names[1].charAt(0) + ".";
  }
  return split_names[0];
}
console.log(abbrev_name("Robin Singh"));

// 5. Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

function delete_char(name1, number) {
  let truncate_string = name1.substr(0, 5);
  console.log(truncate_string);
}
delete_char("Robin singh", 4);

// Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insert(string1, string2, place) {
  let array = string1.split("");
  array.splice(place, 0, string2);
  return array.join("");
}
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

// Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings(string1, string2) {
  if (typeof string1 === string2) return true;
  else return false;
}

console.log(compare_strings("abcd", "AbcD"));
compare_strings("abcd", "AbcD");

// Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital

function Uncapitalize(word){
  return word.charAt(0).toLowerCase() + word.slice(1);
}
 console.log(Uncapitalize('Js string exercises'));



 // Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

let car = {
  name: "Tesla",
  wheels: 4,
}
car.name = "Mercedes"
delete car.name
console.log(car);

//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

let description ={
name: "Irimia",
lastName: "Bogdan",
address: "Iasi",
profession: "Customer Support"
}

let arrayKeys = Object.keys(description);
let upperKeys = arrayKeys.map(name => name.toUpperCase());
let arrayValues = Object.values(description);
let lowerValues = arrayValues.map(name => name.toLowerCase());
let toString = arrayKeys.join();

// console.log (description, arrayKeys, upperKeys,arrayValues, lowerValues, )

console.log(toString, "reprezinta ceva")


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

let player = {
  name: "Banel",
  lastName2: "Nicolita",
  country: "Romania"
}
let fullName = Object.assign({},name);
fullName.name = "Banel";
fullName.lastName2 = "Nicolita"

console.log(fullName)

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
let myAdress = {
  city: "Iasi",
  streetName: "Moldovei",
  streetNumber: 2,
}
let myAdressCopy = Object.assign({},myAdress)
myAdressCopy.postCode = 1234
myAdressCopy.country = "Romania" 

myHouse = { 
  rooms: 3,
  zone: "Bucium",
  animals: 1
}

const MyfullAdress = {...myAdressCopy, ...myHouse }
console.log(MyfullAdress)
// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
let recipe = {
  chocolate: "200gr",
  flour: "300gr",
  eggs:4,
  milk: "500ml",
   creamIngredients:  {
cream: "500ml",
sugar: "200gr" , 
}
}
let whippedCream = recipe.creamIngredients;
let arrayCream = Object.keys(whippedCream);
let sentence = arrayCream.join()
console.log(sentence, "apartin obiectului Recipe")

//Ex6
// Avem obiectul : 
myObject = {
name: "John",
surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
let arraySort = Object.values(myObject);
arraySort.sort();
console.log(arraySort)


//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.

function Computer(name, model, year) {
this.ComputerName = name;
this. ComputerModel = model;
this.ComputerYear = year;
}
let myComputer = new Computer("Acer", "x23da", 2018)
console.log(myComputer)


myComputer.toUpperCase()

let specsToUpper = myComputer.toUpperCase()

console.log(specsToUpper)

// nu reusesc sa fac values upperCase....