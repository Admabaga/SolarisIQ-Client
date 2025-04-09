import RegisterForm from "../../Common/Forms/RegisterForm/RegisterForm"
import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged.jsx"
import RegisterAbout from "../../Common/About/RegisterAbout.jsx"
export default function Register() {
    return (
        <>
            <NavBarNotLogged></NavBarNotLogged>
            <div className="mt-5 mb-5 p-4 justify-content-center" style={{ width: '100%' }}>
                <div className="row ">
                    <div className="col-md-6">
                        <RegisterAbout></RegisterAbout>
                    </div>
                    <div className="col-md-6">
                        <RegisterForm></RegisterForm>
                    </div>
                </div>
            </div>
        </>
    )
}