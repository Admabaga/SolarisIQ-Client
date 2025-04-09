import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Pages/Login/Login.jsx'
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login />} ></Route>
            <Route path="/us"></Route>
            <Route path="/lobby" element={<Lobby />}></Route>
            <Route path="/register" element={<Register/>}></Route>
        </Routes>
    )
}