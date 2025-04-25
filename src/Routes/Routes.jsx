import { Routes, Route } from 'react-router-dom';
import Home from '../Components/Pages/Home/Home.jsx'
import Lobby from '../Components/Pages/Lobby/Lobby.jsx';
import Register from '../Components/Pages/Register/Register.jsx';
import { Toaster } from 'react-hot-toast';
import AboutUs from '../Components/Pages/AboutUs/AboutUs.jsx';
import  Profile  from '../Components/Pages/Profile/Profile.jsx';
import CreateConsumption from '../Components/Pages/Consumption/CreateConsumption/CreateConsumption.jsx'
import GetConsumptions from '../Components/Pages/Consumption/GetConsumptions/GetConsumptions.jsx';
import SolarEnergy from '../Components/Pages/SolarEnergy/SolarEnergy.jsx';
import HydroElectricalEnergy from '../Components/Pages/HydroElectricalEnergy/HydroElectricalEnergy.jsx';
import EolicEnergy from '../Components/Pages/EolicEnergy/EolicEnergy.jsx';
import UpdateConsumption from '../Components/Pages/Consumption/UpdateConsumption/UpdateConsumption.jsx';
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
                <Route path="/consumos/registroConsumo" element={<CreateConsumption/>}></Route>
                <Route path="/consumos/misConsumos" element={<GetConsumptions/>}></Route>
                <Route path="/consumos/actualizarConsumos" element={<UpdateConsumption/>}></Route>
                <Route path="/energiasRenovables/energiaSolar" element={<SolarEnergy/>}></Route>
                <Route path="/energiasRenovables/energiaHidroelectrica" element={<HydroElectricalEnergy/>}></Route>
                <Route path="/energiasRenovables/energiaEolica" element={<EolicEnergy/>}></Route>
            </Routes>
        </>
    )
}