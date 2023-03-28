// const fakeFetch = (url) => {
// 	return new Promise((resolve, reject) => {
// 	  setTimeout(() => {
// 	    if (url === "https://example.com/api/chat") {
// 	      reject({
// 	        status: 503,
// 	        message: "Service Unavailable"
// 	      });
// 	    } else {
// 	      resolve({
// 	        status: 200,
// 	        data: {
// 	          message: "Success"
// 	        }
// 	      });
// 	    }
// 	  }, 2000);
// 	});
// };

// // Your Code here
// const url1 = "https://example.com/api/chat"
// const url2 = "https://example.com/api/chat2"
// fakeFetch(url2)
//     .then(d=> console.log(d.data.message))
//     .catch(e => e.status===503 ? console.log("error 503a") : console.log("na"))


// Output on the DOM should be: 
// We are facing high demand at the moment. Please check back later in sometime.

const fakeFetch = (url) => {
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
  
  
  
  
  
  // Output on the DOM should be in the format, {itemName} -- INR {price} -- {quantity}:
//   1. Bread -- INR 30 -- 10
//   2. Water Bottle -- INR 50 -- 50
//   3. Dairy Milk -- INR 20 -- 30

const root = document.getElementById("root")


const headingElement = document.createElement("h1")


const makeHeader = msg => {
    headingElement.innerHTML = msg
    return headingElement
}

root.appendChild(makeHeader("Hello World from JS"))
root.appendChild(makeHeader("Hello World from JS 2"))

// const foo = async (name) => {
//     console.log(name + "start");
//     await console.log(name+ "middle");
//     console.log(name+ "end");
//   }
  
//   foo("First");
//   foo("Second");

  const delayedLoop = times => {
  
    for(let i=0; i<times; i++){
      setTimeout(()=> console.log("Hello World"),1000*(i+1))
    }
  }
  
  delayedLoop(30);
