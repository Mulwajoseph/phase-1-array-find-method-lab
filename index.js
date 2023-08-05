// // code your solution here
// const users = [
//   {
//     firstName: "Niky",
//     lastName: "Morgan",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Jaguar",
//     personalQuote: "You're never too old to learn something new",
//   },
//   {
//     firstName: "Tracy",
//     lastName: "Lum",
//     favoriteColor: "Yellow",
//     favoriteAnimal: "Penguin",
//     personalQuote: "I just got lost in thought - it was unfamiliar territory",
//   },
//   {
//     firstName: "Josh",
//     lastName: "Rowley",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Penguin",
//     personalQuote: "Always remember you’re unique, just like everyone else",
//   },
//   {
//     firstName: "Kate",
//     lastName: "Travers",
//     favoriteColor: "Red",
//     favoriteAnimal: "Jaguar",
//     personalQuote: "Behind every great man is a woman rolling her eyes",
//   },
//   {
//     firstName: "Avidor",
//     lastName: "Turkewitz",
//     favoriteColor: "Blue",
//     favoriteAnimal: "Penguin",
//     personalQuote:
//       "You don’t have to see the whole staircase, just take the first step",
//   },
//   {
//     firstName: "Drew",
//     lastName: "Price",
//     favoriteColor: "Yellow",
//     favoriteAnimal: "Elephant",
//     personalQuote:
//       "Failure is not the opposite of success: it’s part of success",
//   },
// ];

// //To find out everyone`s first name

// function firstNamePrinter(collection){
//     for (const user of collection){
//         console.log(user.firstName)
//     }
// }
// firstNamePrinter(users)


// // to print out only users whose favorite color is blue:
// function blueFilter(collection) {
//   for (const user of collection) {
//     if (user.favoriteColor === "Blue") {
//       console.log(user.firstName);
//     }
//   }
// }

// blueFilter(users);
// // LOG: Niky
// // LOG: Josh
// // LOG: Avidor

// //it returns the index of the first matching element 
//  users.indexOf('firstName')


//  let books = ['Eloquent Javasript','JAVASCRIPT :the good parts','learn Javascript Visually','more books','Javascript Guide' ]


//  //loopTHroughArray function loops through each array of our books variable and returns each book to the end
//  const  loopThroughArray = function(array){
//   for(let item of array)
//   console.log(item)
//  }

//  //Capitalize our array

//  const capitalizeArray = function(array){
//   let newArray = []
//   for (let item of array ){
//     newArray.push(item.toUpperCase())
//   }
//   console.log(newArray)
//  }
// //  loopThroughArray(books)
// //passing loopThroughArray as an argument
// function handleBooks (fun){
//   let books = ['Eloquent Javasript','JAVASCRIPT :the good parts','learn Javascript Visually','more books','Javascript Guide' ]
//   fun(books)
// }
// handleBooks(loopThroughArray)


//  function handleArray (array){
//   console.log(array)
//  }
//  handleArray(books)//returns the number of books and the names of books themselves
//  handleBooks(capitalizeArray)


const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(records){
  const resultW = records.find((item) => item.result ==="W")
  return resultW ? resultW.year :undefined
}
console.log(superbowlWin(record))