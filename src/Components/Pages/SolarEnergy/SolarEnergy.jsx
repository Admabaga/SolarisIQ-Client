import './SolarEnergy.css'
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged'
import Footer from '../../Common/Footer/Footer'
import ProductionByRegion from '../../Common/Graphics/ProductionByRegion/ProductionByRegion.jsx';
import TopProducers from '../../Common/Graphics/TopTenProduction/TopTenProduction.jsx';
import ProductionPercentageByRegion from '../../Common/Graphics/PercentageByRegionProduction/PercenteageByRegionProduction.jsx';
import { useState } from 'react';
import "chart.js/auto";

export default function SolarEnergy() {
    const [year, setYear] = useState(2023);
    const [activeTab, setActiveTab] = useState('production');
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
                    <div className="profile-tabs-container">
                        <nav className="profile-tabs-nav">
                            <button
                                onClick={() => setActiveTab('production')}
                                className={`profile-tab-button ${activeTab === 'production' ? 'profile-tab-button--active' : ''}`}
                            >
                                Produccion
                                {activeTab === 'production' && <div className="profile-tab-indicator"></div>}
                            </button>
                            <button
                                onClick={() => setActiveTab('consumption')}
                                className={`profile-tab-button ${activeTab === 'consumption' ? 'profile-tab-button--active' : ''}`}
                            >
                                Consumo
                                {activeTab === 'consumption' && <div className="profile-tab-indicator"></div>}
                            </button>
                        </nav>
                    </div>
                    {activeTab === 'production' ? (

                        <div className="profile-info-section">
                            <ProductionByRegion
                                year={year}
                                title={"Consumo Total por Región"}
                                indicator={'Solar Energy Generation'}
                                label={`Consumo energia solar por Región Teravatios/hora(TWh)`}
                                endPoint={'/renewableEnergyConsumptions/totalConsumptionByIndicatorAndRegions'}
                            ></ProductionByRegion>
                            <ProductionPercentageByRegion
                                year={year}
                                title={"Participación Porcentual Regional"}
                                indicator={'Solar Energy Generation'}
                                label={`% Consumo por Región (${year})`}
                                endPoint={'/renewableEnergyConsumptions/renewableConsumptionInPercentageByRegions'}
                            ></ProductionPercentageByRegion>
                            <TopProducers
                                year={year}
                                title={"Top 10 Países Consumidores"}
                                indicator={'Solar Energy Generation'}
                                label={`Top 10 Países - Consumo energia solar ${year}`}
                                endPoint={'/renewableEnergyConsumptions/topTenConsumptionEnergys'}
                            ></TopProducers>
                        </div>
                    ) : (
                        <div className="profile-info-section">
                            <ProductionByRegion
                                year={year}
                                title={"Producción Total por Región"}
                                indicator={'Solar Energy Generation'}
                                label={`Producción energia solar por Región Teravatios/hora(TWh)`}
                                endPoint={'/renewableEnergyProductions/totalProductionByIndicatorAndRegions'}
                            ></ProductionByRegion>
                            <ProductionPercentageByRegion
                                year={year}
                                title={"Participación Porcentual Regional"}
                                indicator={'Solar Energy Generation'}
                                label={`% Producción por Región (${year})`}
                                endPoint={'/renewableEnergyProductions/renewableProductionInPercentageByRegions'}
                            ></ProductionPercentageByRegion>
                            <TopProducers
                                year={year}
                                title={"Top 10 Países Productores"}
                                indicator={'Solar Energy Generation'}
                                label={`Top 10 Países - Producción energia solar ${year}`}
                                endPoint={'/renewableEnergyProductions/topTenProductionEnergys'}
                            ></TopProducers>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}