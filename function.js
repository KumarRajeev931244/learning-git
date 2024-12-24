// function hello(){
//     console.log("hello rajeev")
// }


// use of rest operator

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,3000,45,234,234));

// passing the object

// const user = {
//     userName: "hitesh",
//     price: 100
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`)    
// }

// handleObject(user)

/**we can pass object as parameter */

// handleObject({
//     userName:"Rajeev",
//     price: 200
// })

// array

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[2]
// }

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([233,43,54,6]))

// ############################ global and local scope ############

// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()

// if(true){
//     const username =  "hitesh"
//     if(username === "hitesh"){
//         const website = "youtube"
//         console.log(username + website)
//     }
//     console.log(website)
// }

// console.log(username)


// we can store function in variable

// const addTwo = function(num){
//     return num + 2

// }

/*************************** this and arrow function ************************************/



/**
 * this  is used to access current context(context matlab value jo store karna ho) in object.
 */
// const userDetails = {
//     username: "rajeev",
//     price: 900,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website` )
//         console.log(this)
//     }
// }

// userDetails.welcomeMessage()
// userDetails.username = "manisha"
// userDetails.welcomeMessage()

// console.log(this)

// function chai(){
//     console.log(this)
// }

// function chai(){
//     let username = "manu"
//     console.log(this.username)
// }

// chai()

/*********************************** arrow function *************************/


// // type 1
// const addThree = (num1, num2, num3) => {
//     return num1 + num2
// }


// // type 2
// const chai = () => {
//     console.log("this is arrow function")
// }

// type 3

// const addThree = (num1, num2) => num1 + num2

// type 4  for returning object and should be pass in paranthesis.

// const addThree = (num1, num2) => ({username: "raja"})

//type 5 

// const addThree = (num1, num2) => (num1 + num2)

/*********************** immediately invoke function *****************/

// IIF is used to protect the pollution of global scope.
// There should be ; after function.


// (function chai(){
//     // name IIF
//     console.log("Db is connected")
// })();

// ((name)=> {
//     console.log(`db is connected successfully:${name}`)
// })('hitesh');