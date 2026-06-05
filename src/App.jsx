import React, { useState } from "react";
export default function App() {
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const answers = ["a", "b", "c", "d"];
  const [flag, setFlag] = useState(true);
  const [q, setQ] = useState(0);
  const [questions, setQuestions] = useState([]);
  const API_KEY = import.meta.env.VITE_GEMINI_KEY;
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`;

  const payload = {
    contents: [
      {
        parts: [
          {
            text: `Provide 10 mcq on mern. Return the output strictly in valid JSON format containing exactly four keys: "id","question","options" and "answer". Do not include markdown code blocks or wrapping text`,
          },
        ],
      },
    ],
  };

  const fetchQuestions = async () => {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const data = await response.json();
    const responseText = await data.candidates[0].content.parts[0].text;
    await setQuestions(JSON.parse(responseText));
    await console.log(responseText);
     setFlag(false);
  };
  const handleNext = () => {
    if (userAnswer === questions[q].answer) {
      setScore(score + 1);
    }
    setQ(q + 1);
  };

  return (
    <div>
      <h3>MERN Stack Quiz</h3>
      <hr />

      {flag ? (
        <button onClick={fetchQuestions}>Start Quiz</button>
      ) : (
        <div>
          <h3>{questions[q].question}</h3>
          <div className="m-1">
            {questions[q].options.map((option, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="rdOption"
                  value={option}
                  onChange={(e) => setUserAnswer(e.target.value)}
                ></input>
                {option}
              </div>
            ))}
          </div>
          {q < questions.length - 1 && (
            <button
              className="bg-green-700 text-white p-1 rounded-lg"
              onClick={handleNext}
            >
              Next Question
            </button>
          )}
          <hr />
          My Score:{score}
        </div>
      )}
    </div>
  );
}

// import React, { useState } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// export default function App() {
//   const [user, setUser] = useState({});
//   const handleSuccess = (credentialResponse) => {
//     const details = jwtDecode(credentialResponse.credential);
//     setUser(details);
//   };
//   return (
//     <div>
//       {!user?.email ? (
//         <div className="w-[300px] mx-auto border border-gray-500 m-5 p-5">
//           <h3>Login Form</h3>
//           <p>
//             <input
//               type="text"
//               className="m-1 bg-gray-300 w-full p-1"
//               placeholder="Email"
//             />
//           </p>
//           <p>
//             <input
//               type="password"
//               className="m-1 w-full bg-gray-300 p-1"
//               placeholder="Password"
//             />
//           </p>
//           <button className="m-1 bg-blue-900 text-white p-1 w-full">
//             Login
//           </button>
//           <hr />
//           <GoogleLogin
//             className="m-3"
//             onSuccess={handleSuccess}
//             onError={(err) => console.log(err)}
//           />
//         </div>
//       ) : (
//         <>
//           <div className="w-[300px] mx-auto border border-gray-500 m-5 p-5">
//             <img src={user.picture} />
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//             <p>
//               <button onClick={() => setUser({})}>Logout</button>
//             </p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// import React from "react";
// import StudentCard from "./StudentCard";
// const students = [
//   { id: 1, name: "Nikhil", skill: "Java", location: "Bangalore",imgUrl:"https://picsum.photos/id/1/300/300" },
//   { id: 2, name: "Shivani", skill: "Java", location: "Hyderabad",imgUrl:"https://picsum.photos/id/2/300/300" },
//   { id: 3, name: "Sreeja", skill: "Java", location: "Bangalore",imgUrl:"https://picsum.photos/id/3/300/300" },
// ];
// export default function App() {
//   return (
//     <div className="flex">
//       {students.map((student) => (
//         <StudentCard student={student} />
//       ))}
//     </div>
//   );
// }

// import React, { useState } from 'react'
// export default function App() {
//   const [characters,setCharacters] = useState(0)
//   return (
//     <div>
//       <textarea rows="4" cols="20" onChange={(e)=>setCharacters(e.target.value)}></textarea><br />
//       {characters.length}/200
//     </div>
//   )
// }

// Create folder backend-api
// npm install -g json-server
// db.json
// {
// "users": [
//     { "id": 1, "name": "John", "email": "john@gmail.com" },
//     { "id": 2, "name": "Anu", "email": "anu@gmail.com" }
//   ]
// }
// }
// npx json-server --watch db.json --port 3001

// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Users from "./Users";
// import EditUser from "./EditUser";
// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       children: [
//         { index: true, element: <Users /> },
//         { path: "editUser/:id", element: <EditUser /> },
//       ],
//     },
//   ]);
//   return <RouterProvider router={router} />;
// }

// npm install -D tailwindcss@3 postcss autoprefixer
// npx tailwindcss init –p
// Add following in index.css
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// in tailwind.config.js update following
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

// import React from "react";
// export default function App() {
//   return (
//     <div>
//       <div className="w-[300px] p-3 m-2 border border-gray-500">
//         <img src="1.PNG" alt="" />
//         <h1 className="text-3xl">Product 1</h1>
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid
//         </p>
//         <h3 className="font-bold p-1">Price: $100</h3>
//         <button className="bg-blue-900 text-white p-1 w-full rounded-sm">Add to Cart</button>
//       </div>
//     </div>
//   );
// }

// import React from 'react'
// import "./App.css"
// export default function App() {
//   return (
//     <div>
//       <h1 className="lg:text-3xl md:text-xl sm:text-sm">This is a heading of chapter 1 of HTML</h1>
//       <button>Submit</button>
//       <button>Register</button>
//       <div className="m-3 bg-orange-300 w-[100px] hover:bg-orange-500 hover:text-white">Box</div>
//     </div>
//   )
// }

// import React from "react";
// import "./App.css"
// export default function App() {
//   return (
//     <div className="grid grid-cols-3 gap-3">
//       <div className="box">Box1</div>
//       <div className="box">Box2</div>
//       <div className="box">Box3</div>
//     </div>
//   );
// }

// import React from 'react'
// import "./App.css"
// export default function App() {
//   return (
//     <div className="flex bg-gray-300 justify-center items-center h-[500px]">
//       <div className="box">Box1</div>
//       <div className="box">Box2</div>
//       <div className="box">Box3</div>
//     </div>
//   )
// }

// import React from "react";
// export default function App() {
//   return (
//     <div>
//       <h1 className="bg-green-700 text-gray-300">Hello World</h1>
//       <h1 className="bg-green-700 text-gray-300 m-3 p-3">Hello World</h1>
//       <h1 className="bg-green-700 text-gray-300 mb-3 pt-3">Hello World</h1>
//       <h1 className="bg-green-700 text-gray-300 mx-3 my-5">Hello World</h1>
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { useState,useDeferredValue } from "react";
// export default function App() {
//   const [searchText, setSearchText] = useState();
//   const [photos, setPhotos] = useState([]);
//   const deferredText = useDeferredValue(searchText)
//   fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((res) => res.json())
//     .then((data) =>
//       setPhotos(data.filter((item) => item.title.includes(deferredText))),
//     )
//     .catch((err) => console.log(err));
//   return (
//     <div>
//       <input type="text" onChange={(e) => setSearchText(e.target.value)} />
//       {photos &&
//         photos.map((item) => (
//           <li key={item.id}>
//             {item.id}.{item.title}
//           </li>
//         ))}
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useTransition } from "react";
// export default function App() {
//   const [photos, setPhotos] = useState([]);
//   const [isPending, startTransition] = useTransition();
//   const [currentPage, setCurrentPage] = useState(1);
//   const fetchPhotos = () => {
//     startTransition(async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//       const data = await res.json();
//       setPhotos(data);
//     });
//     for (let i = 0; i <= 1000000000; i++) {}
//   };

//   return (
//     <div>
//       <button onClick={fetchPhotos}>Fetch Photos</button>
//       {isPending && <h2>Loading...</h2>}
//       {photos &&
//         photos.map((item) => (
//           <li key={item.id}>
//             {item.id}.{item.title}
//           </li>
//         ))}
//     </div>
//   );
// }

// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useTransition } from "react";
// export default function App() {
//   const [photos, setPhotos] = useState([]);
//   const [isPending, startTransition] = useTransition();
//   const [currentPage, setCurrentPage] = useState(1);
//   const fetchPhotos = () => {
//     startTransition(async () => {
//       const res = await fetch("https://jsonplaceholder.typicode.com/photos");
//       const data = await res.json();
//       setPhotos(data);
//     });
//     for (let i = 0; i <= 1000000000; i++) {}
//   };
//   // useEffect(() => {
//   //   fetchPhotos();
//   // }, []);

//   const itemsPerPage = 10;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentItems = photos.slice(startIndex, endIndex);
//   const totalPages = photos.length / itemsPerPage;

//   return (
//     <div>
//       <button onClick={fetchPhotos}>Fetch Photos</button>
//       {isPending && <h2>Loading...</h2>}
//       <h2>
//         My Photos - Page {currentPage} of {totalPages}
//       </h2>
//       <button disabled={currentPage === 1} onClick={() => setCurrentPage(1)}>
//         &lt;&lt;
//       </button>
//       <button
//         disabled={currentPage === 1}
//         onClick={() => setCurrentPage(currentPage - 1)}
//       >
//         &lt;
//       </button>
//       {Array.from({ length: totalPages }, (_, index) => (
//         <span
//           style={{ backgroundColor: currentPage === index + 1 && "yellow" }}
//           onClick={() => setCurrentPage(index + 1)}
//         >
//           {index < currentPage + 9 && index > currentPage - 2 && index + 1}
//         </span>
//       ))}
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => setCurrentPage(currentPage + 1)}
//       >
//         &gt;
//       </button>
//       <button
//         disabled={currentPage === totalPages}
//         onClick={() => setCurrentPage(totalPages)}
//       >
//         &gt;&gt;
//       </button>
//       {currentItems &&
//         currentItems.map((item) => (
//           <li key={item.id}>
//             {item.id}.{item.title}
//           </li>
//         ))}
//     </div>
//   );
// }

// import React from 'react'
// import { FaHome,FaIdCard  } from "react-icons/fa";

// export default function App() {
//   return (
//     <div>
//       <FaHome size={30}/>Home
//       <FaIdCard size={30} />Profile
//     </div>
//   )
// }

// import React from "react";
// import useFetch from "./useFetch.js";
// export default function App() {
//   const users = useFetch("https://jsonplaceholder.typicode.com/users");
//   return <div>{users && users.map((user) => <li>{user.name}</li>)}</div>;
// }

// import React, { useEffectEvent, useState } from 'react'
// import { useEffect } from 'react'
// export default function App() {
//   const [users,setUsers] = useState([])
//   const API = import.meta.env.VITE_API_URL
//   const fetchUsers = async () => {
//     const url = `${API}/users`
//     const res = await fetch(url)
//     const data = await res.json()
//     setUsers(data)
//   }
//   useEffect(()=>{
//     fetchUsers()
//   },[])
//   return (
//     <div>
//       {users && users.map(user=>(
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </div>
//   )
// }

// import React from "react";
// import { useState,useCallback } from "react";
// import Child1 from "./Child1";
// export default function App() {
//   const [count, setCount] = useState(0);
//   const click = useCallback(() => {
//     alert("Hello World");
//   }, []);
//   return (
//     <div>
//       {count}
//       <p>
//         <button onClick={() => setCount(count + 1)}>Update Count</button>
//       </p>
//       <hr />
//       <Child1 click={click} />
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// import Child from "./Child";
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [number,setNumber] = useState(0)
//   return (
//     <div>
//       <Child number={number} />
//       <hr />
//       {count}
//       <p>
//         <button onClick={()=>setCount(count+1)}>Update Count</button>
//       </p>
//       {number}
//       <p>
//         <button onClick={()=>setNumber(number+1)}>Update Number</button>
//       </p>
//     </div>
//   );
// }

// import React from "react";
// import { useReducer } from "react";
// function reducer(state, action) {
//   switch (action.type) {
//     case "deleteProduct":
//       return {products:state.products.filter(item => item.id !== action.payload)}
//     default:
//       return state;
//   }
// }
// export default function App() {
//   const [state, dispatch] = useReducer(reducer, {
//     products: [
//       { id: 1, name: "Product 1", price: 35 },
//       { id: 2, name: "Product 2", price: 30 },
//       { id: 3, name: "Product 3", price: 50 },
//     ],
//   });
//   const handleDelete = (id) => {
//     dispatch({ type: "deleteProduct", payload: id });
//   };
//   return (
//     <div>
//       <p>
//         <input type="number" placeholder="Id" />
//         <input type="text" placeholder="Name" />
//         <input type="number" placeholder="Price" />
//         <button>Add</button>
//       </p>
//       {state.products.map((product) => (
//         <li>
//           {product.name}-{product.price}-
//           <button onClick={() => handleDelete(product.id)}>Delete</button>
//         </li>
//       ))}
//     </div>
//   );
// }

// import React from "react";
// import { useReducer } from "react";
// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }
// export default function App() {
//   const [state, dispatch] = useReducer(reducer, { count: 0 });
//   const increment = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrement = () => {
//     dispatch({ type: "decrement" });
//   };
//   return (
//     <div>
//       <button onClick={decrement}>-</button>
//       {state.count}
//       <button onClick={increment}>+</button>
//     </div>
//   );
// }

// import React, { useState, useMemo } from "react";
// export default function App() {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);
//   const orderValue = () => {
//     console.log("Order Value calculated");
//     return number * 100;
//   };
//   const result = useMemo(() => orderValue(), [number]);
//   return (
//     <div>
//       Result:{result}
//       <p>Count:{count}</p>
//       <p>
//         <button onClick={() => setCount(count + 1)}>Update Count</button>
//       </p>
//       <p>Number:{number}</p>
//       <p>
//         <button onClick={() => setNumber(number + 1)}>Update Number</button>
//       </p>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// function Child1() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Child1 mounted");
//     return () => {
//       console.log("Child1 umounted");
//     };
//   }, []);
//   const handleUpdate = () => {
//     setCount(count+1)
//     console.log("Child1 updated")
//   }
//   return (
//     <div>
//       Child 1<p>{count}</p>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }
// function Child2() {
//    const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("Child2 mounted");
//     return () => {
//       console.log("Child2 umounted");
//     };
//   }, []);
//     const handleUpdate = () => {
//     setCount(count+1)
//     console.log("Child2 updated")
//   }
//   return <div>Child 2
//     {count}
//  <button onClick={handleUpdate}>Update</button>

//   </div>;
// }

// export default function App() {
//   const [flag, setFlag] = useState(true);
//   return (
//     <div>
//       <button onClick={() => setFlag(true)}>Child 1</button>
//       <button onClick={() => setFlag(false)}>Child 2</button>
//       {flag ? <Child1 /> : <Child2 />}
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";
// export default function App() {
//   const [price, setPrice] = useState(0);
//   const priceRef = useRef();
//   const prevPrice = useRef();
//   useEffect(() => {
//     if (prevPrice.current > price) {
//       priceRef.current.style.color = "red";
//     } else {
//       priceRef.current.style.color = "green";
//     }
//     prevPrice.current = price;
//   }, [price]);

//   return (
//     <div>
//       <p ref={priceRef}>SBI:{price}</p>
//       <p>
//         <input type="number" onChange={(e) => setPrice(e.target.value)} />
//       </p>
//     </div>
//   );
// }

// import React, { useState } from "react";
// export default function App() {
//   const [run, setRun] = useState(0);
//   const [wicket, setWicket] = useState(0);
//   const [message, setMessage] = useState();

//   const updateRun = () => {
//     if (wicket < 11) {
//       setRun(run + 1);
//       setMessage("Well Done!");
//     }
//   };

//   const updateWicket = () => {
//     if (wicket < 11) {
//       setWicket(wicket + 1);
//       setMessage("Better Luck Next Time");
//     } else {
//       setMessage("Game Over!");
//     }
//   };

//   return (
//     <div>
//       <h2>Cricket Score Board</h2>
//       <div style={{ display: "flex" }}>
//         <div style={{backgroundColor:'gray',width:'150px'}}>
//           <div>
//             {run}
//             <p>
//               <button onClick={updateRun}>Run</button>
//             </p>
//           </div>
//           <div>
//             {wicket}
//             <p>
//               <button onClick={updateWicket}>Wicket</button>
//             </p>
//           </div>
//         </div>
//         <div>{message}</div>
//       </div>
//     </div>
//   );
// }

// import React from "react";
// import { useRef } from "react";
// export default function App() {
//   const colorRef = useRef();
//   const divRef = useRef();
//   const handleSubmit = () => {
//     divRef.current.style.color = colorRef.current.value;
//   };
//   return (
//     <div>
//       <input type="text" ref={colorRef} />
//       <button onClick={handleSubmit}>Submit</button>
//       <div ref={divRef}>Hello World</div>
//     </div>
//   );
// }

//Shopping Cart
// import React, { useState, createContext, useContext } from "react";
// const AppContext = createContext();
// function Products() {
//   const { products, cart, setCart } = useContext(AppContext);
//   const addToCart = (product) => {
//     const found = cart.find((item) => item.id === product.id);
//     !found && setCart([...cart, { ...product, quantity: 1 }]);
//   };
//   return (
//     <div>
//       <h3>Products</h3>
//       <ol>
//         {products &&
//           products.map((product) => (
//             <li key={product.id}>
//               {product.name}-{product.price}-
//               <button onClick={() => addToCart(product)}>Add to Cart</button>
//             </li>
//           ))}
//       </ol>
//     </div>
//   );
// }
// function Cart() {
//   const { cart, setCart, orders,setOrders } = useContext(AppContext);
//   const orderValue = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0,
//   );
//   const increment = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//       ),
//     );
//   };
//   const decrement = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//         )
//         .filter((item) => item.quantity > 0),
//     );
//   };
//   const handleDelete = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };
//   const placeOrder = () => {
//     const dt = new Date()
//     const myOrder = {
//       orderDate:dt.getTime(),
//       items: cart,
//       orderValue: orderValue,
//       status:"Pending"
//     };
//     setOrders([...orders, myOrder]);
//     setCart([]);
//   };
//   return (
//     <div>
//       <h3>My Cart</h3>
//       {cart.length > 0 ? (
//         <>
//           <ol>
//             {cart &&
//               cart.map((item) => (
//                 <li key={item.id}>
//                   {item.name}-{item.price}-
//                   <button onClick={() => decrement(item.id)}>-</button>
//                   {item.quantity}
//                   <button onClick={() => increment(item.id)}>+</button>
//                   {item.quantity * item.price}-
//                   <button onClick={() => handleDelete(item.id)}>Delete</button>
//                 </li>
//               ))}
//           </ol>
//           <p>Order Value:{orderValue}</p>
//           <p>
//             <button onClick={placeOrder}>Place Order</button>
//           </p>
//         </>
//       ) : (
//         <h4>Your cart is empty.</h4>
//       )}
//     </div>
//   );
// }

// function Order() {
//   const { orders } = useContext(AppContext);
//   return (
//     <div>
//       <h3>My Orders</h3>
//       <ol>
//       {orders &&
//         orders.map((order) => (
//           <li>
//             {order.orderDate}-{order.items.length}-{order.orderValue}-{order.status}
//           </li>
//         ))}
//         </ol>
//     </div>
//   );
// }

// export default function App() {
//   const [products, setProducts] = useState([
//     { id: 1, name: "Product 1", price: 35 },
//     { id: 2, name: "Product 2", price: 25 },
//     { id: 3, name: "Product 3", price: 15 },
//   ]);
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);
//   return (
//     <AppContext.Provider
//       value={{ products, setProducts, cart, setCart, orders, setOrders }}
//     >
//       <Products />
//       <hr />
//       <Cart />
//       <hr />
//       <Order />
//     </AppContext.Provider>
//   );
// }
/////////////////////////////////

// import React, { useState,createContext,useContext } from 'react'
// const AppContext = createContext()
// function Child1(){
//   const {count,setCount} = useContext(AppContext)
//   return <div>Child 1-{count}-<button onClick={()=>setCount(count+1)}>Update</button></div>
// }
// function Child2(){
//   const {count,setCount} = useContext(AppContext)
//   return <div>Child 2-{count}-<button onClick={()=>setCount(count+1)}>Update</button></div>
// }

// export default function App() {
//   const [count,setCount] = useState(0)
//   return (
//     <AppContext.Provider value={{count,setCount}}>
//       <Child1/>
//       <Child2/>
//     </AppContext.Provider>
//   )
// }

// import React, { useState } from 'react'
// export default function App() {
//   const [count,setCount] = useState(0)
//   // let count = 1
//   // const handleUpdate = () => {
//   //   count++
//   //   console.log(count)
//   // }
//    const handleUpdate = () => {
//     setCount(count+1)
//     console.log(count)
//   }
//   return (
//     <div>
// {count}
// <p>
//   <button onClick={handleUpdate}>Update</button>
// </p>
//     </div>
//   )
// }

// import React, { useState } from "react";
// export default function App() {
//   const [user, setUser] = useState({});
//   const [users, setUsers] = useState([]);
//   const handleSubmit = () => {
//     setUsers([...users, user]);
//   };
//   const handleDelete = (email) => {
//     setUsers(users.filter((user) => user.email !== email));
//   };
//   return (
//     <div>
//       <h3>Registration Form</h3>
//       <p>
//         <input
//           type="text"
//           onChange={(e) => setUser({ ...user, name: e.target.value })}
//           placeholder="Name"
//         />
//       </p>
//       <p>
//         <input
//           type="text"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder="Email"
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           placeholder="Password"
//         />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       <hr />
//       {users &&
//         users.map((user) => (
//           <li>
//             {user.name}-{user.email}-{user.password}-
//             <button onClick={() => handleDelete(user.email)}>Delete</button>
//           </li>
//         ))}
//     </div>
//   );
// }

// import React, { useState } from "react";
// export default function App() {
//   const [user, setUser] = useState({});
//   const [message, setMessage] = useState();
//   const handleLogin = () => {
//     if (user.email === "john@gmail.com" && user.password === "1234") {
//       setMessage("Welcome!");
//     } else {
//       setMessage("Access Denied");
//     }
//   };
//   return (
//     <div>
//       <h3>Login Form</h3>
//       <p>
//         <input
//           type="text"
//           onChange={(e) => setUser({ ...user, email: e.target.value })}
//           placeholder="Email"
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           onChange={(e) => setUser({ ...user, password: e.target.value })}
//           placeholder="Password"
//         />
//       </p>
//       <p>
//         <button onClick={handleLogin}>Login</button>
//       </p>
//       <hr />
//       {message}
//     </div>
//   );
// }

// import React, { useState } from "react";
// export default function App() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [message, setMessage] = useState();
//   const handleLogin = () => {
//     if (email==="john@gmail.com" && password === "1234"){
//       setMessage("Welcome!")
//     }
//     else{
//       setMessage("Access Denied")
//     }
//   }
//   return (
//     <div>
//       <h3>Login Form</h3>
//       <p>
//         <input
//           type="text"
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//         />
//       </p>
//       <p>
//         <input
//           type="password"
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//         />
//       </p>
//       <p>
//         <button onClick={handleLogin}>Login</button>
//       </p>
//       <hr />
//       {message}
//     </div>
//   );
// }

//uncontrolled component
// import React from "react";
// import { useRef,useState } from "react";
// export default function App() {
//   const numRef = useRef();
//   const [result, setResult] = useState();
//   const handleSubmit = () => {
//     setResult(numRef.current.value * numRef.current.value);
//   };
//   return (
//     <div>
//       <p>
//         <input type="number" ref={numRef} />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       <hr />
//       {result}
//     </div>
//   );
// }

// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [number, setNumber] = useState();
//   const [result, setResult] = useState();
//   const handleSubmit = () => {
//     setResult(number * number);
//   };
//   return (
//     <div>
//       <p>
//         <input type="number"
//         onChange={(e) => setNumber(e.target.value)} />
//       </p>
//       <p>
//         <button onClick={handleSubmit}>Submit</button>
//       </p>
//       <hr />
//       {result}
//     </div>
//   );
// }

//updating state
// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//   return (
//     <div>
//       {score}
//       <p>
//         <button onClick={() => setScore(score + 1)}>
//           Update
//         </button>
//       </p>
//     </div>
//   );
// }

//usestate intro
// import React from "react";
// import { useState } from "react";
// export default function App() {
//   const [score, setScore] = useState(0);
//     return <div>{score}</div>;
// }

//rendering array of objects
// import React from "react";
// export default function App() {
//   const products = [
//     { id: 1, name: "Laptop", price: 45000 },
//     { id: 2, name: "Desktop", price: 25000 },
//     { id: 3, name: "Keyboard", price: 1000 },
//   ];
//   return (
//     <div>
//       {products.map((product) => (
//         <li key={product.id}>
//           {product.name}-{product.price}
//         </li>
//       ))}
//     </div>
//   );
// }

//rendering array
// import React from "react";
// export default function App() {
//   const products = ["Laptop", "Desktop", "Keyboard"];
//   return (
//     <div>
//       {products.map((product) => (
//         <li key={product}>{product}</li>
//       ))}
//     </div>
//   );
// }

//conditional renderig using && operator
// import React from "react";
// function Pass() {
//   return <div>Pass</div>;
// }
// export default function App() {
//   let score = 50;
//   return <div>{score > 40 && <Pass />}</div>;
// }

//conditional rendering using ternary operator
// import React from "react";
// function Pass() {
//   return <div>Pass</div>;
// }
// function Fail() {
//   return <div>Fail</div>;
// }
// export default function App() {
//   let score = 50;
//   return <div>{score > 40 ? <Pass /> : <Fail />}</div>;
// }

//passing argument to a function
// import React from 'react'
// export default function App() {
//   const handleClick = (name) => {
//     alert(name)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleClick("John")}>Click</button>
//     </div>
//   )
// }

//Handling events
// import React from 'react'
// export default function App() {
//   const handleClick = () => {
//     alert("Hello")
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

//external styling
// import React from "react";
// import "./App.css"
// export default function App() {
//   return (
//     <div>
//       <h1 className="class">Heading</h1>
//     </div>
//   );
// }

//inline styling
// import React from "react";
// export default function App() {
//   return (
//     <div>
//       <h1 style={{ backgroundColor: "yellow" }}>Heading</h1>
//     </div>
//   );
// }

//default props
// import React from "react";
// function Sum({a=0,b=0}) {
//   return <div>{a+b}</div>;
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={10} />
//     </div>
//   );
// }

//destructuring props
// import React from "react";
// function Sum({a,b}) {
//   return <div>{a+b}</div>;
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={10} b={4} />
//     </div>
//   );
// }

//props
// import React from "react";
// function Sum(props) {
//   return <div>{props.a + props.b}</div>;
// }
// export default function App() {
//   return (
//     <div>
//       <Sum a={10} b={4} />
//     </div>
//   );
// }

//Expressions
// import React from "react";
// export default function App() {
//   let name = "John";
//   let a = 10;
//   let b = 20;
//   return (
//     <div>
//       Hello {name}
//       {a + b}
//     </div>
//   );
// }

//Example of class component
// import React, { Component } from 'react'
// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

//import/export components
// import React from "react";
// import Header from "./Header";
// import Home from "./Home";
// import Footer from "./Footer";
// export default function App() {
//   return (
//     <div>
//       <Header />
//       <Home />
//       <Footer />
//     </div>
//   );
// }

//one top element
// import React from 'react'
// export default function App() {
//   return (
//     <>
//       <h1>This is a heading</h1>
//       <p>This is a paragraph</p>
//     </>
//   )
// }
