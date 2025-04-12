import imgLinkedin from '../../Images/linkedin.webp'
import imgGit from '../../Images/git.png'
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h3>Enlaces</h3>
            <ul>
              <a href="https://www.linkedin.com/in/adrian-mauricio-barrera-garcia-a85881230" target='blank'>
                <li><img src={imgLinkedin} alt="" /></li>
              </a>
              <a href="https://github.com/Admabaga" target='blank'>
                <li><img src={imgGit} alt="" /></li>
              </a>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Contacto</h3>
            <p>Autor: Adrian Barrera Garcia</p>
            <p>Correo electrónico: admabaga@outlook.com</p>
            <p>Teléfono: 321-885-4756</p>
          </div>
          <div className="col-lg-4">
            <h3>Derechos de autor</h3>
            <p>(c) 2025 Mi Sitio Web. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer