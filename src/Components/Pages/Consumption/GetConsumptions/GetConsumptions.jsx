import { NavBarLogged } from "../../../Common/Navs/NavBarLogged/NavBarLogged";
import ApiClient from "../../../../Utils/ApiClient/ApiClient";
import Footer from "../../../Common/Footer/Footer";
import ConsumptionCard from "../../../Common/Cards/ConsumptionCard/ConsumptionCard";
import { useState, useEffect } from "react";
import ConsumptionGraph from "../../../Common/Graphics/ConsumptionsGraph/ConsumptionGraph";
import './GetConsumptions.css';

export default function GetConsumptions() {
    const [consumptions, setConsumptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getConsumptions = async () => {
            try {
                const response = await ApiClient.get("/users/consumptions")
                setConsumptions(response.data);
            } catch (error) {
                console.error("Error fetching consumptions:", error);
                setError("No pudimos cargar tus consumos. Intenta nuevamente.");
            } finally {
                setLoading(false);
            }
        };

        getConsumptions();
    }, []);

    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    {!loading && !error && consumptions.length > 0 && (
                        <ConsumptionGraph data={consumptions} />
                    )} <br />
                    <h2 className="consumptions-title">Historial de Consumo</h2>
                    <p className="consumptions-subtitle">Revisa tus períodos de consumo y eficiencia energética</p>
                    <div className="consumption-cards-grid">
                        {loading ? (
                            <div className="loading-container">
                                <p>Cargando tus consumos...</p>
                            </div>
                        ) : error ? (
                            <div className="error-container">
                                <p className="error-message">{error}</p>
                                <button
                                    className="retry-button"
                                    onClick={() => window.location.reload()}
                                >
                                    Reintentar
                                </button>
                            </div>
                        ) : consumptions.length === 0 ? (
                            <div className="empty-state">
                                <p>No hay registros de consumo disponibles</p>
                            </div>
                        ) : (
                            consumptions.map((consumption, index) => (
                                <ConsumptionCard
                                    key={index}
                                    startDate={consumption.startDate}
                                    endDate={consumption.endDate}
                                    consumptionValue={consumption.consumption}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}