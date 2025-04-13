import { NavBarLogged } from "../../Common/Navs/NavBarLogged/NavBarLogged";
import Footer from "../../Common/Footer/Footer";
import './Lobby.css'

export default function Lobby() {
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                </div>
            </div>
            <Footer />
        </>
    );
}