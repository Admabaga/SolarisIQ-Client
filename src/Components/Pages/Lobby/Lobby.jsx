import { NavBarLogged } from "../../Common/Navs/NavBarLogged/NavBarLogged";
import Footer from "../../Common/Footer/Footer";
import LobbyCard from "../../Common/Cards/LobbyCard/LobbyCard.jsx";
import { useNavigate } from "react-router-dom";
import './Lobby.css';

function Lobby() {
    const navigate = useNavigate()
    const handleConsumoClick = () => {
        navigate("/consumos/misConsumos");
    };

    const handleConsejosClick = () => {
        console.log('Ir a consejos');
    };

    const handleProgresoClick = () => {
        console.log('Ir a progreso');
    };

    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <section className="lobby-welcome-section">
                        <h1>¡Bienvenido/a de nuevo!</h1>
                        <p>Consulta tu consumo energético y aprende cómo reducir tu impacto ambiental.</p>
                    </section>

                    <section className="lobby-dashboard">
                        <LobbyCard
                            title="Mi Consumo"
                            description="Revisa tu consumo mensual, compara con el anterior y analiza tus hábitos."
                            textButton="Ver detalles"
                            onClick={handleConsumoClick}
                        />
                        <LobbyCard
                            title="Consejos Verdes"
                            description="Explora recomendaciones para mejorar tu eficiencia energética."
                            textButton="Ver consejos"
                            onClick={handleConsejosClick}
                        />
                        <LobbyCard
                            title="Progreso Ambiental"
                            description="Mira cómo tu consumo contribuye a un mundo más sostenible."
                            textButton="Ver progreso"
                            onClick={handleProgresoClick}
                        />
                    </section>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default Lobby;