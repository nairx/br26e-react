import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

// function App() {
//   return (
//     <div>
//       <h1>Good Afternoon</h1>
//       <p>This is a paragraph</p>
//     </div>
//   );
// }

// let element = (
//   <div>
//     <h1>Good Afternoon</h1>
//     <p>This is a paragraph</p>
//   </div>
// );
// let a = 10;
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_clientId}>
    <App />
  </GoogleOAuthProvider>,
);
