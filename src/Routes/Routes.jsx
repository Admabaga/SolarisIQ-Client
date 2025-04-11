import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
export function AppRoutes() {
    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/us"></Route>
            <Route path="/lobby" element={<Lobby />}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
        <ToastContainer />
        </>
    )
}