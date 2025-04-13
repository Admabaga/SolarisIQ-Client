import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import AboutUs from '../Components/Pages/AboutUs/AboutUs.jsx';
export function AppRoutes() {
    return (
        <>
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'linear-gradient(to right, #b5bcca, #d1d8e6)',
            color: '#333',
            zIndex: 999999, 
            border: '1px solid #d1d8e6',
            borderRadius: '8px'
          }
        }}
      />
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/us"></Route>
            <Route path="/lobby" element={<Lobby/>}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
        </Routes>
        </>
    )
}