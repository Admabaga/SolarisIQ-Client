import imgLinkedin from '../../Images/linkedin.webp';
import imgGit from '../../Images/git.png';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 enlaces">
              <h3>Redes Sociales</h3>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/adrian-mauricio-barrera-garcia-a85881230"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Adrian Barrera">
                  <img src={imgLinkedin} alt="LinkedIn" />
                </a>
                <a href="https://github.com/Admabaga"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Adrian Barrera">
                  <img src={imgGit} alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 contacto">
              <h3>Contacto</h3>
              <p><strong>Autor:</strong> Adrian Barrera Garcia</p>
              <p><strong>Correo:</strong> admabaga@outlook.com</p>
              <p><strong>Teléfono:</strong> 321-885-4756</p>
            </div>
            <div className="col-lg-4 derechos">
              <h3>Derechos</h3>
              <p>© 2025 Adrian Barrera. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
