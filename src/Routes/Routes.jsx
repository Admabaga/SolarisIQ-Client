import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import AboutUs from '../Components/Pages/AboutUs/AboutUs.jsx';
export function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/us"></Route>
            <Route path="/lobby" element={<Lobby />}></Route>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/aboutUs" element={<AboutUs/>}></Route>
        </Routes>
        <ToastContainer />
        </>
    )
}