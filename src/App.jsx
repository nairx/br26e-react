import React, { useState } from "react";
export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const handleLogin = () => {
    if (email==="john@gmail.com" && password === "1234"){
      setMessage("Welcome!")
    }
    else{
      setMessage("Access Denied")
    }
  }
  return (
    <div>
      <h3>Login Form</h3>
      <p>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </p>
      <p>
        <button onClick={handleLogin}>Login</button>
      </p>
      <hr />
      {message}
    </div>
  );
}

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
