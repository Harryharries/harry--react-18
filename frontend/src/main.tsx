import ReactDOM from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Router>
      <AppRoutes></AppRoutes>
    </Router>
  ,
)
