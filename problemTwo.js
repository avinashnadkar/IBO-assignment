/* 

2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

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


/* time compaxity = o(n^2) */
function  getUniquePrducts(){
   
    /*  return new array */
     let uniqueProducts = [];
     
     for(let i=0;i<listOfProducts.length;i++){
        
        /* boolean flag to check availablity of product in array */
        flag = true;
     
         /* loop through uniqueProduct arry to check reapeting products */
          for(let j=0;j<uniqueProducts.length;j++){
            if(listOfProducts[i].productName == uniqueProducts[j].productName){
               uniqueProducts[j].quantity += listOfProducts[i].quantity
               flag = false;
               break;
            }
          }
       
        if(flag) uniqueProducts.push(listOfProducts[i]);
      
     }
  
     return uniqueProducts;
  }
  
  console.log(getUniquePrducts())