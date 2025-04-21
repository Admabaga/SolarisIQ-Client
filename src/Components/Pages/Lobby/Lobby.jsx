import { NavBarLogged } from "../../Common/Navs/NavBarLogged/NavBarLogged";
import Footer from "../../Common/Footer/Footer";
import LobbyCard from "../../Common/Cards/LobbyCard/LobbyCard.jsx";
import './Lobby.css';

export default function Lobby() {
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
                            tittle="Mi Consumo"
                            description="Revisa tu consumo mensual, compara con el anterior y analiza tus hábitos."
                            textButton="Ver detalles"
                            onClick={() => console.log('Ir a consumo')}
                        />
                        <LobbyCard
                            tittle="Consejos Verdes"
                            description="Explora recomendaciones para mejorar tu eficiencia energética."
                            textButton="Ver consejos"
                            onClick={() => console.log('Ir a consejos')}
                        />
                        <LobbyCard
                            tittle="Progreso Ambiental"
                            description="Mira cómo tu consumo contribuye a un mundo más sostenible."
                            textButton="Ver progreso"
                            onClick={() => console.log('Ir a progreso')}
                        />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
