/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}

*/




const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];


/* Time complaxity = o(n) */
function getUniqueProductCount(){

   let countTable = {}
   
   for(let i=0;i<listOfProducts.length;i++){
      if(countTable[listOfProducts[i].productName] == undefined){
          countTable[listOfProducts[i].productName] = 1
      }else{
          countTable[listOfProducts[i].productName]++
      }
   }
   
   return countTable;
}

console.log(getUniqueProductCount())






