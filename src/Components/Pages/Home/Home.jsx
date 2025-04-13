import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged/NavBarNotLogged.jsx";
import Footer from "../../Common/Footer/Footer.jsx";
import BannerImg from '../../Images/Banner.jpg';
import LoginForm from "../../Common/Forms/Login/LoginForm.jsx";
import EnergyLogo from '../../Images/clean.png';
import EnergyImage from '../../Images/renewable-energy-svgrepo-com.svg';
import { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';


export default function Home() {
    const loginSectionRef = useRef(null);
    const handleScrollToLogin = () => {
        loginSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const navigate = useNavigate()

    return (
        <>
            <NavBarNotLogged />
            <div className="main-content">
                <div
                    className="banner text-white"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                >
                    <div class="energy-banner">
                        <h1>Solaris IQ</h1><br />
                        <h2>Energía Inteligente = ♻️ + 💡 + 💰</h2>
                        <p>
                            La fórmula perfecta: <strong>Solaris IQ</strong> te enseña renovables,
                            analiza tus patrones de consumo y revela dónde ahorrar.
                            ¡Convierte datos en árboles plantados y euros salvados!
                        </p>
                    </div>
                    <button
                        className="btn btn-success my-2 mx-2"
                        onClick={() => navigate("/register")}
                        aria-label="Registrarse en la aplicación Solaris IQ"
                    >
                        ¡Regístrate ahora!
                    </button>
                    <button
                        className='btn btn-success my-2 mx-2'
                        onClick={handleScrollToLogin}
                        aria-label="Ver más información y acceder al formulario de inicio de sesión"
                    >
                        ¡Inicia sesión!
                    </button>

                </div>
                <div className="login-section-wrapper" ref={loginSectionRef}>
                    <div className="login-container">
                        <div className="cards-container">
                            <div className="login-side-info">
                                <div className="card-image-container">
                                    <img src={EnergyLogo} alt="Solar icon" className="card-image" />
                                </div>
                                <h3 className="card-title">Impulsa tu energía con Solaris IQ</h3>
                                <p className="card-text">
                                    Administra tu consumo energético, visualiza tu impacto ambiental
                                    y haz parte del cambio hacia un mundo más sostenible.
                                </p>
                            </div>

                            <div className="login-side-info">
                                <div className="card-image-container">
                                    <img src={EnergyImage} alt="Solar icon" className="card-image" />
                                </div>
                                <h3 className="card-title">Monitorea tu progreso</h3>
                                <p className="card-text">
                                    Obtén insights valiosos sobre tu consumo y optimiza tu uso
                                    energético con nuestras herramientas avanzadas.
                                </p>
                            </div>
                        </div>
                        <div className="form-container">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}