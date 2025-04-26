import { NavBarLogged } from "../../../Common/Navs/NavBarLogged/NavBarLogged"
import Footer from '../../../Common/Footer/Footer.jsx'
import { useState } from "react"
import { DateRange } from "react-date-range"
import { toast } from 'react-hot-toast'
import ApiClient from "../../../../Utils/ApiClient/ApiClient.jsx"
import './CreateConsumption.css'

export default function CreateÇonsumption() {
    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const [consumption, setConsumption] = useState("0.0")
    const [isLoading, setIsLoading] = useState(false)
    const getCookie = (name) => {
        const value = `; ${document.cookie}`
        const parts = value.split(`; ${name}=`)
        if (parts.length === 2) return parts.pop().split(';').shift()
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const csrfToken = getCookie('XSRF-TOKEN')
        setIsLoading(true)
        try {
            const response = await ApiClient.post(
                '/users/consumptions',
                {
                    startDate: dateRange[0].startDate,
                    endDate: dateRange[0].endDate,
                    consumption: Number(consumption)
                })
            toast.success('¡Consumo guardado correctamente!')
        } catch (error) {
            console.log(error.message)
            toast.error(`¡Error al guardar el consumo ${error.message}!`)
        }finally{
            setIsLoading(false)
        }
    };
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <div className="energy-container">
                        <h2 className="consumptions-title ">Registra tu Consumo Energético</h2>
                        <form onSubmit={handleSubmit} className="energy-form-container">
                            <div className="profile-form-group">
                                <label className="form-label">Selecciona el periodo:</label>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setDateRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                    rangeColors={["#4CAF50"]}
                                />
                            </div>
                            <div className="profile-form-group">
                                <label className="profile-form-label">Consumo total (kWh):</label>
                                <input
                                    type="text"
                                    value={consumption}
                                    onChange={(e) => setConsumption(e.target.value)}
                                    className="form-input"
                                    min="0"
                                    required
                                />
                            </div>

                            <button type="submit" className="profile-submit-button">
                            {isLoading ? 'Guardando...' : 'Guardar consumo'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}