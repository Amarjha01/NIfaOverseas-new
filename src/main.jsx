import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // ✅ Import HelmetProvider
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  
    <HelmetProvider> 
      <App />
    </HelmetProvider>
  
);
