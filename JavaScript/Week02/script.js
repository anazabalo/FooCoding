// Strings 1
let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log (myString)

console.log (myString.length)

myString.replace(/,/g, ' ');


//Arrays 2
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

let MaurosFavoriteAnimal = favoriteAnimals.push ('turtle');

console.log (favoriteAnimals)

let jimsFavoriteAnimal = favoriteAnimals.splice (1,0, 'meerkat');

console.log ('the value of the new array it is added to the index 1 of the list');

console.log (favoriteAnimals);

console.log ('The array has a length of: ' + favoriteAnimals.length);

let jasonsLeastFavoriteAnimal = favoriteAnimals.splice (3,1);

console.log (favoriteAnimals);

let myLeastFavoriteAnimal = favoriteAnimals.indexOf ('meerkat');
console.log ('The item you are looking for is at index: ' + myLeastFavoriteAnimal)



// More of Javascript 



//1

function argumentSum (one, two, three) {
  
    return one, two, three; 
    
  }
  
  let sumOfArguments = (5, 10, 15)
  
  sumOfArguments


  //2

  let color = ('red')
  console.log (color)
  
 function colorCar (color) {
 console.log ('a ' + color + ' car')
 }
 
 colorCar(color)



 //3

 let cat = {
    name : "fluffy",
    age : "2 years old",
    color : "black",
  }
  
  function perfectCat (cat) {
   return cat
    
  }
  
  perfectCat (cat);



  // 4

  function vehicleType (color, type){
    if (type === 1) return (color + ' car' );
    if (type === 2) return (color + ' motorbike');
  }
    
    vehicleType ('blue', 2)



 // 5

 console.log((3 === 3) ? "yes": "no" )



 // 6

 function vehicle (color, type, age){
    if (type === 1 && age >= 5) return (color + ' used car' );
    if (type === 1 && age <= 5) return (color + ' new car' );
    if (type === 2 && age >= 5) return (color + ' used motorbike');
    if (type === 2 && age <= 5) return (color + ' new motorbike');
  }
    
    vehicle ('blue', 2, 5)
 


// 7

    let typeOfVehicles = [ "motorbike", "caravan", "bike", "tricycle", "scooter"]
console.log (typeOfVehicles)
 


// 8

let typeOfVehicles = [ "motorbike", "caravan", "bike", "tricycle", "scooter"]
console.log (typeOfVehicles [2]) 



// 9

let typeOfVehicles = [ "car","motorbike", "caravan", "bike", "tricycle", "scooter"]
console.log (typeOfVehicles [2]) 

function newVehicle (color, type, age){
  if (age >= 5) return (color + ' used ' + typeOfVehicles[ type]);
  if (age <= 5) return (color + ' new ' + typeOfVehicles[ type] );
  if (age >= 5) return (color + ' used ' + typeOfVehicles[ type]);
  if (age <= 5) return (color + ' new ' + typeOfVehicles[ type]);
}
  
newVehicle ('green', 3, 1)



// 10

let typeOfVehicles = [ "car","motorbike", "caravan", "bike", "tricycle", "scooter"]

let vehiclesAd = "";

for (let i = 0; i < typeOfVehicles.length; i++) {
if (i === typeOfVehicles.length - 1) {
    vehiclesAd += "and " + typeOfVehicles[i] + "s. "; break
};
    vehiclesAd += typeOfVehicles[i] + "s, ";
    
};

console.log("Amazing Joe\'s Garage, we service " + vehiclesAd);



// 11

/*let typeOfVehicles = [ "car","motorbike", "caravan", "bike", "tricycle", "scooter"]*/

typeOfVehicles.push ("truck");
console.log (typeOfVehicles);

let vehiclesAd = "";
for (let i = 0; i < typeOfVehicles.length; i++) {
if (i === typeOfVehicles.length - 1) {
    vehiclesAd += "and " + typeOfVehicles[i] + "s. "; break 
};
    vehiclesAd += typeOfVehicles[i] + "s, ";
    
};
console.log("Amazing Joe\'s Garage, we service " + vehiclesAd);



//12, 13, 14
const teachers = {
    Sahin: 'Javascript',
    Seif: 'Css',
    Ildana: 'html',
  }
 
  

// 15
  
  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
  
  x == y // False: it's false because the arrays are stored in different parts of the memory, so are not the same 
  
  x === y // False: It's false for the same reason.
  
  z == y // True: It's true because in the variable it's specifying that this 2 are stored in the same part of the memory.
  
  z == x // False: Same then the other false cases before, they are stored in different parts of the memory.



// 16 

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
                    // changing 02
o2.foo = 'changeone'
console.log (o2)
console.log (o3)

console.log (( o2 === o3) ? ("it's a match!") : ("it's not a match"))
           
                // changing 01

o1.foo = 'changetwo'
console.log (o1)
console.log (o3)

console.log (( o1 === o3) ? ("it's a match!") : ("it's not a match"))


         // it's the same (o3 = o2) & (o2 = o3)?
console.log (o3 = o2)
console.log (o2 = o3)

console.log (((o3 = o2) === (o2 = o3))? ("it's a match!") : ("it's not a match"))



// 17

let bar = 42;
typeof typeof bar

console.log(typeof typeof bar);     //returns string. So far for what I've been reading typeOf it's converting "typeOf bar" in an string, so that's why it's giving as result.
console.log(bar);                   //returns  42. 
console.log(typeof bar);            //returns number

