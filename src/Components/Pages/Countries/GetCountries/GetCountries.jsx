import './GetCountries.css'
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged'
import Footer from '../../../Common/Footer/Footer'

export default function GetCountries(){
    return(
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}