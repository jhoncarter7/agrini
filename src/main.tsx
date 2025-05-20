import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from "@emailjs/browser";
// …other imports…

emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

createRoot(document.getElementById("root")!).render(<App />);
