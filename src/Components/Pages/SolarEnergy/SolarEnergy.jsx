import './SolarEnergy.css'
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged'
import Footer from '../../Common/Footer/Footer'

export default function SolarEnergy() {
    return (
        <>
        <div className="layout-container">
            <NavBarLogged />
            <div className="main-content">
                <div className="profile-content-container">
                    {/* Tu contenido aquí */}
                </div>
                <Footer />
            </div>
        </div>
        </>
    )
}