
// foreach function
const arr= [
    {
        name:'Alice',
        mark:35,
        palce:'Kannur'
    },
    {
        name:'Abhi',
        mark:28,
        palce:'Wayanad'
    },
    {
        name:'Anu',
        mark:41,
        palce:'Kochi'
    },
    {
        name:'Malu',
        mark:30,
        palce:'TVM'
    }
]
// console.log(arr)
arr.forEach((item)=>{
    console.log(item)
})
arr.forEach((item)=>{
    console.log(item.name)
})
let sum=0
arr.forEach((item)=>{
    sum=sum+item.mark
})
console.log(sum)
arr.forEach((item,index)=>{
    console.log(index)
})


// find() function
const arr1= [
    {
        name:'Alice',
        mark:35,
        palce:'Kannur'
    },
    {
        name:'Abhi',
        mark:28,
        palce:'Wayanad'
    },
    {
        name:'Anu',
        mark:41,
        palce:'Kochi'
    },
    {
        name:'Malu',
        mark:30,
        palce:'TVM'
    }
]
var found=arr1.find((item)=>{
    return item.name==='Anu'
})
console.log(found)

var found1=arr1.find((item)=>{
    return item.mark<40
})
console.log(found1)
// filter(),


var filter=arr1.filter((item)=>{
    return item.mark>30
})
console.log(filter)

var filter1=arr1.filter((item)=>{
    return item.name==='Ammu'
})
console.log(filter1)
                     
var filter2=arr1.filter((item)=>{
    return item.name==='Anu'
})
console.log(filter2)
  
var filter3=arr1.filter((item,index)=>{
    return index<2
})
console.log(filter3)

// maop()
const arr3=[
    {
        name:'Ammu',
        age:20
    },
    {
        name:'Ajo',
        age:23
    },
    {
        name:'Vishnu',
        age:23
    }

]
var newArr =arr3.map((item)=>{
    return item.name;
})
console.log(newArr)

var newArr1 =arr3.map((item)=>{
    return item.name+item.age;
})
console.log(newArr1)

var newArr2 =arr3.map((item)=>{
    return 'hi'
})
console.log(newArr2)

var newArr3 =arr3.map((item)=>{
    return {
        ...item,
        country:'India'
    }
})
console.log(newArr3)
// reduce() 
        
var newArr4 =arr1.reduce(( total,item)=>{
    return total +item.mark
})
console.log(newArr4)


const arr4=[
    {
        name:'jo',
        rollno:1
    },
    {
        name:'Kichu',
        rollno:3
    },
    {
        name:'Don',
        rollno:21
    }

]
var value =arr4.reduce((total,item)=>{
      return item.rollno ;
})
console.log(value)
   
       
  