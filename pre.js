// JS prerequisites for react 

// object destructuring ====================================================================

// const user = {
//     id : 100,
//     username : "prakisht",
//     age : 25,
//     profession : 'SWE'

// }

// const {username , age ,id,  profession} = user
    
// console.log(username,age,id) 


// array destructuring ====================================================================

// Since arrays are ordered lists, 
// JavaScript unpacks the elements sequentially
//  based on their position (index)
// const arr = [450,90]

// const [marks, percentage] = arr
// console.log(marks, percentage);


// template literals ====================================================================

// const product = 'Guitar'
// const price = '₹8000'

// const message = `The price of ${product} is ${price}`
// console.log(message);

// ** Template literals also preserve line breaks natively without needing \n
// const multiLine = `
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//   </ul>
// `;
// console.log(multiLine);


// fetch API request ====================================================================

// async function getData(){
//     const url = `https://jsonplaceholder.typicode.com/posts/1`

//     const response = await fetch(url)

//     if(!response.ok){
//         console.log(`HTTP error ! Status : ${data_response.status}`)
//         return 
//     }

//     const data = await response.json()
    
//     const {title,body} = data
//     console.log(`Title : ${title} \nBody : ${body}`);
    
// }
// getData()
