// var jsonE=`{
//     "name":"Code malayalam",
//     "age":1,
//     "topic":["Javascript","React","SCSS","git","aws"],
//     "caption":"Keep calm and JS"
// }` 

// var e={
//     name:'code malayalam',
//     age:1,
//     topic:['Javascript','React','SCSS','git'],
//     caption:'keep calm and js'
// }
// var jsonE=JSON.stringify(e)
// console.log(jsonE)

// const names=["Spongebob","Patrick","Squidward","Sandy"]
// console.log(typeof(names))
// const jsonString=JSON.stringify(names)
// console.log(jsonString)
// console.log(typeof(jsonString))
// const person={
//     "name":"Spongebob",
//     "age":3,
//     "isEmployed":true,
//     "hobbies":["Jellyfishing","Karate","Cooking"]
// }
// console.log(typeof(person))

// const jsonString=JSON.stringify(person)
// console.log(jsonString)
// console.log(typeof(jsonString))

// const people=[{
//     "name":"Spongebob",
//     "age":30,
//     "isEmployed":true

// },
// {
//     "name":"Patric",
//     "age":34,
//     "isEmployed":false

// },
// {
//     "name":"Squidward",
//     "age":50,
//     "isEmployed":true

// },
// {
//     "name":"Sandy",
//     "age":27,
//     "isEmployed":false,

// },
// ]
// console.log(typeof(people))
// const jsonString=JSON.stringify(people)
// console.log(jsonString)
// console.log(typeof(jsonString))
// const jsonNames=`["Spongebob","Patrick","Squidward","Sandy"]`
// const jsonPerson=`{"name":"Spongebob","age":3,"isEmployed":true,"hobbies":["Jellyfishing","Karate","Cooking"]  }`
// const jsonPeople=`[{ "name":"Spongebob", "age":30,"isEmployed":true },
//     {"name":"Patric","age":34,"isEmployed":false },
//     { "name":"Squidward","age":50,"isEmployed":true },
//     {"name":"Sandy","age":27,"isEmployed":false  }
//     ]`
//   console.log(jsonNames)
//   console.log(typeof jsonNames)

// const parsedData =JSON.parse(jsonNames)
// console.log(parsedData)
// console.log( typeof parsedData)

// fetch("person.json")
// .then(response=>response.json())
// // response.json also return a promise
// .then(value => console.log(value))


fetch('person.json')
   .then(response=>response.json())
   .then(value => console.log(value))
  
   