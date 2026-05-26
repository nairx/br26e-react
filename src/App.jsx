
//passing argument to a function
import React from 'react'
export default function App() {
  const handleClick = (name) => {
    alert(name)
  }
  return (
    <div>
      <button onClick={()=>handleClick("John")}>Click</button>
    </div>
  )
}

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
