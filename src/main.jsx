import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Paths from './components/Routes/Paths'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/saga-orange/theme.css";
import "/node_modules/primeflex/primeflex.css";
import "/node_modules/primeicons/primeicons.css";
import 'swiper/css';
import 'swiper/css/pagination';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider/>
    <Paths/>
  </StrictMode>,
)