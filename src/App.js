import './index.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import INF313 from './pages/INF313';
import INF352 from './pages/INF352';
import INF401 from './pages/INF401';
import INF452 from './pages/INF452';
import Admin from './pages/Admin';
import NotFound from './pages/404';


function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/INF313" element={<INF313 />} />
            <Route path="/INF352" element={<INF352 />} />
            <Route path="/INF401" element={<INF401 />} />
            <Route path="/INF452" element={<INF452 />} />
            <Route path="/Admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         </BrowserRouter>
    </>
      
  );
}

export default App;
