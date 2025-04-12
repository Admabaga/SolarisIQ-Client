import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged.jsx"
import Footer from "../../Common/Footer/Footer.jsx"
import BannerImg from '../../Images/Banner.jpg'
import LoginForm from "../../Common/Forms/Login/LoginForm.jsx"
import EnergyLogo from '../../Images/clean.png'
import EnergyImage from '../../Images/renewable-energy-svgrepo-com.svg'
import './Home.css'

export default function Home() {
    return (
        <>
            <NavBarNotLogged />
            <div className="main-content">
                <div
                    className="banner text-white"
                    style={{ backgroundImage: `url(${BannerImg})` }}
                >
                    <h2>Solaris IQ</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quaerat,
                        temporibus iusto sapiente ipsam porro optio sed, id odio ipsum quo corrupti ad obcaecati
                        illo mollitia iure dolorum! Quis autem ea neque provident aliquam unde quisquam?
                        Mollitia excepturi, labore molestias saepe recusandae veritatis perspiciatis voluptas fuga,
                        nostrum facilis sed!
                    </p>
                    <button className='btn btn-success'>Ver más</button>
                </div>
                <div className="login-section-wrapper">
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
    )
}