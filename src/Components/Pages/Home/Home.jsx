import { NavBarNotLogged } from "../../Common/Navs/NavBarNotLogged.jsx"
import Footer from "../../Common/Footer/Footer.jsx"
import BannerImg from '../../Images/Banner.jpg'
import LoginForm from "../../Common/Forms/Login/LoginForm.jsx"
import './Home.css'

export default function Home() {
    return (
        <>
            <NavBarNotLogged></NavBarNotLogged>
            <div className="main-content">
            <div
                className="banner text-white"
                style={{
                    backgroundImage: `url(${BannerImg})`,
                }}
            >
                <h2>Solaris IQ</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quaerat, temporibus iusto sapiente ipsam porro optio sed, id odio ipsum quo corrupti ad obcaecati illo mollitia iure dolorum! Quis autem ea neque provident aliquam unde quisquam? Mollitia excepturi, labore molestias saepe recusandae veritatis perspiciatis voluptas fuga, nostrum facilis sed!</p>
                <button className='btn btn-success'>Ver más</button>
            </div>
            <div>
                <LoginForm></LoginForm>
            </div>
            </div>
            <Footer></Footer>
        </>
    )
}