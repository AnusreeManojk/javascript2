// const regexp=/cat/
// // const result= regexp.test('my bat')
// const result= regexp.test('my cat')
// console.log(result)

// const regexObj=/cat/i
// const str1="The cat is white"
// const str2="Rat eats meat"
// const str3="Is it ok?"

// var result1=regexObj.test(str1)
// console.log(result1)
// var result2=regexObj.test(str2)
// console.log(result2)
// var result3=regexObj.test(str3)
// console.log(result3)

// const regexObj=/[cr]at/i
// const str1="The cat is white"
// const str2="Rat eats meat"
// const str3="Is it ok?"

// var result1=regexObj.test(str1)
// console.log(result1)
// var result2=regexObj.test(str2)
// console.log(result2)
// var result3=regexObj.test(str3)
// console.log(result3)

// const regexObj1=/[a-z]at/i
// const str4="The cat is white"
// const str5="Rat eats meat"

// var result1=regexObj1.test(str4)
// console.log(result1)
// var result2=regexObj1.test(str5)
// console.log(result2)

// const regexObj2=/^cat/i
// const str6="The cat is white"
// const str7="Cat eats meat"
// const str8="These are good meats"

// var result6=regexObj2.test(str6)
// console.log(result6)
// var result7=regexObj2.test(str7)
// console.log(result7)
// var result8=regexObj2.test(str8)
// console.log(result8)


// const regexObj1=/meat$/i
// const str1="The cat is white"
// const str2="Rat eats meat"
// const str3="These are good meats"


// var result1=regexObj1.test(str1)
// console.log(result1)
// var result2=regexObj1.test(str2)
// console.log(result2)
// var result3=regexObj1.test(str3)
// console.log(result3)
// $ in multiline
// const regexObj1=/meat$/im
// const str1="The cat is white"
// const str2="Rat eats meat"
// const str3="These are good meats"
// const  str4=`
// good meat
// is always good
// `
// var result1=regexObj1.test(str1)
// console.log(result1)
// var result2=regexObj1.test(str2)
// console.log(result2)
// var result3=regexObj1.test(str3)
// console.log(result3)
// var result4=regexObj1.test(str4)
// console.log(result4)

// ?

const regexObj1=/meats?$/i
const str1="The cat is white"
const str2="Rat eats meat"
const str3="These are good meats"


var result1=regexObj1.test(str1)
console.log(result1)
var result2=regexObj1.test(str2)
console.log(result2)
var result3=regexObj1.test(str3)
console.log(result3)

const regexObj=/fish(es)?$/im
const str4="The cat is white"
const str5="Rat eats fish"
const str6="These are good fishes"


var resulta=regexObj.test(str4)
console.log(resulta)
var resultb=regexObj.test(str5)
console.log(resultb)
var resultc=regexObj.test(str6)
console.log(resultc)

