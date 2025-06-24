import { createRoot } from 'react-dom/client'
import './index.css'
 // @ts-ignore
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')!).render(
    <App />
)
