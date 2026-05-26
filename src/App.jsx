import React from "react";
function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}
function Home() {
  return (
    <div>
      <p>This is the home component</p>
    </div>
  );
}
function Footer() {
  return (
    <div>
      <h3>&copy; 2026. All rights reserved.</h3>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

// import React from 'react'
// export default function App() {
//   return (
//     <>
//       <h1>This is a heading</h1>
//       <p>This is a paragraph</p>
//     </>
//   )
// }
