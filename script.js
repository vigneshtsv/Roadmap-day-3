//introduction to array
// var a =[1,2,5,"abc","true"];
// console.log(a);
// for(var i=0; i<a.length;i++){
//  console.log(a[i]);
// }
// console.log(a.length);
// console.log(a.length-1);
// console.log(a.indexOf(2.5));
// - - - - - - - - - - - - - 

//introduction to objects
//person details (name,age,gender,year,city)
// let personDetails = {
//     Name: "vignesh",
//     Age: 25,
//     Gender: "Male",
//     Year: 1998,
//     City: "paramakudi"
// }
// console.log(personDetails);
//using dot method

   // console.log(personDetails.Age);
   // console.log(personDetails.City);
   // console.log(personDetails.Gender);
   // console.log(personDetails.Name);
   // console.log(personDetails.Year);

//using box method
   
//    console.log(personDetails["Age"]);
//    console.log(personDetails["City"]);
//    console.log(personDetails["Gender"]);
//    console.log(personDetails["Name"]);
//    console.log(personDetails["Year"]);
// - - - - - - - - - - - - - - - - - - - - - - - - -

//for in loop 
//  for(var i in personDetails)
//  {
//     console.log(i);
//  }

//  => this method  of code print in only keyname
//  -- - - - - - - - - - - - - - - - 
//  for(var i in personDetails)
//  {
//     console.log(personDetails[i])
//  }
//  => this method of code print in only keyvalue

//- - - - - - - - - - - - - - - - - - - - 


// let personDetails = {
//     Name: "vignesh",
//     Age: 25,
//     Gender: "Male",
//     Year: 1998,
//     City: "paramakudi"
// }
// personDetails.Education = ["10","12","degree"]//add education value
// console.log(personDetails);
// for(var i=0; i<personDetails.Education.length;i++){ //object ku ulla irukura array value ya print panrathuku for loop and method
//     console.log(personDetails.Education[i]); // object ulla irukura array oda index value ya print panra console code
// }

//- - - - - - - - - - - - - - - - - - 
//Introducation JSON

// var obj ={
//     "name":"vignesh",
//     "age": "25",
//     "gender":"male"
// }
// console.log(obj.name)
// console.log(obj.gender);
// console.log(obj.age);

// - - - - - - - - - - - - - - -

// Array of Object

var arr = [
{
    "name":"john",
    "age":"20",
},
{
    "name":"doe",
    "age":"49",
},
{
    "name":"wick",
    "age":"38",
}
]
console.log(arr);
for(var i=0;i<arr.length;i++){
    console.log(arr[i].name,arr[i].age)
}
arr[3]={"name":"rupan","age":"35"}//add this element
arr[2]={"name":"wick","age":"50"}//update
console.log(arr)