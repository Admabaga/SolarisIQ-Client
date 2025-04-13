import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import AboutUs from '../Components/Pages/AboutUs/AboutUs.jsx';
import  Profile  from '../Components/Pages/Profile/Profile.jsx';
export function AppRoutes() {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 2500,
                    className: 'toast-common',
                    success: { className: 'toast-default' },
                    error: { className: 'toast-error' },
                }}
            />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/us"></Route>
                <Route path="/lobby" element={<Lobby />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/aboutUs" element={<AboutUs />}></Route>
            </Routes>
        </>
    )
}