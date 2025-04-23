import { NavBarLogged } from "../../../Common/Navs/NavBarLogged/NavBarLogged"
import Footer from '../../../Common/Footer/Footer.jsx'
import { useState } from "react";
import { DateRange } from "react-date-range";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import './CreateConsumption.css'

export default function CreateÇonsumption() {
    const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection"
        }
      ]);
    
      const [consumption, setConsumption] = useState("0.0");
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      };

      const handleSubmit = async(e) => {
        e.preventDefault()
        const csrfToken = getCookie('XSRF-TOKEN')
        try{
            const response = await axios.post(
                'http://localhost:8080/users/consumptions',
                {
                  startDate: range[0].startDate,
                  endDate: range[0].endDate,
                  consumption: Number(consumption)
                },
                {
                  withCredentials: true,
                  headers: {
                    'Content-Type': 'application/json',
                    'X-XSRF-TOKEN': csrfToken
                  }
                }
              );
              console.log(response.data)
              
        }catch(error){
            console.log(error.message)
        }
        setSubmitted(true);
      };
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <div className="energy-container">
                        <h2 className="energy-title">Registro de Consumo Energético</h2>
                        <form onSubmit={handleSubmit} className="energy-form-container">
                            <div className="profile-form-group">
                                <label className="form-label">Selecciona el periodo:</label>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={(item) => setRange([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={range}
                                    rangeColors={["#4CAF50"]}
                                />
                            </div>

                            <div className="profile-form-group">
                                <label className="profile-form-label">Consumo total (kWh):</label>
                                <input
                                    type="number"
                                    value={consumption}
                                    onChange={(e) => setConsumption(e.target.value)}
                                    className="form-input"
                                    min="0"
                                    required
                                />
                            </div>

                            <button type="submit" className="profile-submit-button">
                                Guardar Consumo
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}