const numbers = [3,5,6,1,14];
const findMaxMin = arr => arr.reduce((acc,curr)=>{
    acc[0]= acc[0] < curr ? curr : acc[0]
    acc[1]= acc[1] > curr ? curr : acc[1]
    return acc
},[-Infinity,Infinity])

console.log(findMaxMin(numbers))



// Your Code here
const delayedLoop = n => {
    for(let i=0; i<n; i++){
        setTimeout(() => {
           console.log("Hello") 
        }, (i+1)*1000);
    }
}
// function delayedLoop(n) {
//     for (let i = 1; i <= n; i++) {
//       setTimeout(() => console.log('Hello'), i * 1000);
//     }
//   }
  

// delayedLoop(3);
// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second


const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldSucceed) {
            reject(`error from server: ${msg}`);
        }
        resolve(`message from server: ${msg}`);
      }, 3000);
    });
  };
  
  // Your Code here
//   fakeFetch("hi raaaju").then(d=> console.log(d)).catch(e=> console.log(e))
  
  
  // Hi -- after 3 seconds

  const fakeFetch22 = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/itemlist") {
          resolve({
            status: 200,
            message: "Success",
            data: [
              { itemName: "Bread", price: 30, quantity: 10 },
              { itemName: "Water Bottle", price: 50, quantity: 50 },
              { itemName: "Dairy Milk", price: 20, quantity: 30 }
            ]
          });
        } else {
          reject({
            status: 404,
            message: "Items list not found."
          });
        }
      }, 2000);
    });
  };
  
  // Your Code here
  fakeFetch22("https://example.com/api/itemlist").then(response => console.log(response.data)).catch(e=>console.error(e))
//   console.log(dataMy)
  
  
  
  
  // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
//   1. Bread -- INR 30 -- 10
//   2. Water Bottle -- INR 50 -- 50
//   3. Dairy Milk -- INR 20 -- 30