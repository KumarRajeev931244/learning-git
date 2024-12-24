// condition : if, if-else

const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("allow to buy new course")
}

// falsy value: false, 0, -0, bigInt 0n, "",  null, undefined, NAN

// truthy values: "0", 'false', " ", [], {}, function(){}

/**
 * 
 * for checkng array is empty: array.length == 0
 * for checking object is empty: Object.keys(emptyObj).length
 * forEach donot return anything.
 */

// Nullish coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20
// console.log(val1)

/******************* Ternary Operator******************** */

//  condition ? true : false

/************************************* loop **************************/


/**
 * for in : this loop mostly used for object
 * for of : this loop mostly used for array
 */
const arr = [1, 3 , 4]

//  for of 
// for (const num of arr) {
//     console.log(num);     
// }

// const greeting = "hello world"

// for (const greet of greeting) {
//     console.log(greet)
// }

// Maps: map object key-value pairs and remember the original insertion order of the keys.

// const map = new Map()
// map.set('IN', "india")
// map.set('usa', "united states of america")
// map.set('fr', "france")

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, ":-", value)  
// }

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

// for in for iterating object

// for (const key in myObject) {
//     console.log(myObject[key]);
    
// }

// for (const [key,value] in arr) {
//     console.log(arr[key]);       
// }

const coding = ['coding', 'js',  'ruby']

// for each

// coding.forEach( function(item){
//     console.log(item)
// })

// coding.forEach( (item)=> {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// here we are giving reference
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr)
// })

// [{},{}, {}]

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "phyton",
        languageFileName: "py"
    }
]

// myCoding.forEach( (item)=> {
//     // here item contain the object
//     // console.log(item)
//     console.log(item.languageFileName)
// })


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter((item) => {
//     return item > 5
// })

// console.log(newNums);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums1 = myNumber.map( (num)=>  num + 10)
// console.log(newNums1)


// ************************* reducers **************************
// it is mostly used for finding total


// const mynuns = [1,2,3]
// const myTotal = mynuns.reduce((acc, currentValue) => {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`)
//     return acc + currentValue
// }, 2)
// console.log(myTotal);

const shoppingCart = [{
    itemName: "js course",
    price: 2999
},{
    itemName: "js course",
    price: 3999
},{
    itemName: "js course",
    price: 4999
}

]

const totalAmount = shoppingCart.reduce((acc, item) => {  return acc + item.price},0)
console.log(totalAmount)