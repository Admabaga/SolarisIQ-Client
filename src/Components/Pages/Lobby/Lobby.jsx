import { NavBarLogged } from "../../Common/Navs/NavBarLogged";
import Footer from "../../Common/Footer/Footer";
import RegisterForm from "../../Common/Forms/RegisterForm/RegisterForm";
import './Lobby.css'

export default function Lobby() {
  return (
    <div className="layout-container">
      <div className="main-wrapper">
        <NavBarLogged />

        <Footer />
      </div>
    </div>
  );
}