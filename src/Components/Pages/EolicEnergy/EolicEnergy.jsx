import './EolicEnergy.css';
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged';
import Footer from '../../Common/Footer/Footer.jsx';
import WindProductionByRegion from '../../Common/Graphics/WindProductionByRegion/WindProductionByRegion.jsx';
import TopWindProducers from '../../Common/Graphics/TopTenProduction/TopTenProduction.jsx';
import WindProductionPercentageByRegion from '../../Common/Graphics/PercentageByRegionProduction/PercenteageByRegionProduction.jsx';
import { useState } from 'react';
import "chart.js/auto";

export default function EolicEnergy() {
    const [year, setYear] = useState(2023);
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <h3>Selecciona un una fecha:</h3>
                    <label>Año: </label>
                    <select value={year} onChange={e => setYear(parseInt(e.target.value))}>
                        {Array.from({ length: 2023 - 1978 + 1 }, (_, i) => 1978 + i).map(y => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                    <WindProductionByRegion
                        year={year}
                    ></WindProductionByRegion>
                    <WindProductionPercentageByRegion
                        year={year}
                    ></WindProductionPercentageByRegion>
                    <TopWindProducers
                        year={year}
                    ></TopWindProducers>
                </div>
            </div>
            <Footer />
        </>
    );
}