import { NavBarNotLogged } from '../../Common/Navs/NavBarNotLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import Hero from '../../Images/EolicEnergy.svg'
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';

export default function AboutUs() {
    const navigate = useNavigate()

    return (
        <>
            <NavBarNotLogged />
            <div className="hero-about bg-gradient-primary py-5">
                <div className="container text-center py-4">
                    <h1 className="display-4 fw-bold mb-3">Conoce nuestra energía</h1>
                    <p className="lead mx-auto" style={{ maxWidth: "700px" }}>Innovación y sostenibilidad en cada kilovatio que ayudamos a gestionar</p>
                    <img
                        src={Hero}
                        alt="Energía sostenible"
                        className="img-fluid mt-4"
                        style={{ maxHeight: "300px" }}
                    />
                </div>
            </div>
            <div className='px-3 px-md-5'>
                <section className='content-section my-5'>
                    <div className="container">
                        <h2><strong>Misión 🧭</strong></h2>
                        <p>
                            <span className="keyword">Solaris IQ</span> empodera a hogares y empresas para tomar el control de su energía a través de una plataforma intuitiva que monitorea, analiza y educa sobre consumo eléctrico y fuentes renovables.<br /><br />
                            <span className="keyword">🔌 Optimizar el gasto energético</span> en tiempo real, identificando patrones y oportunidades de ahorro.<br />
                            <span className="keyword">☀️ Informar sobre energía renovable:</span> producción local, incentivos y cómo adoptarla en la vida cotidiana.<br />
                            <span className="keyword">📉 Reducir la huella ambiental</span> con métricas claras (ej.: "Este mes ahorraste el equivalente a 10 árboles").<br />
                            <span className="keyword">🎓 Educar</span> con contenido práctico para transitar hacia un estilo de vida sostenible.<br /><br />
                            Somos el puente entre los usuarios y un <span className="keyword">futuro energético más limpio</span>, sin generar energía, pero sí <span className="keyword">el conocimiento para usarla de forma consciente.</span>
                        </p>
                    </div>
                </section>
                <div className="stats-section py-5 my-5">
                    <div className="container">
                        <div className="row text-center">
                            <div className="col-md-3">
                                <div className="display-4 text-primary fw-bold">15K+</div>
                                <p>Usuarios activos</p>
                            </div>
                            <div className="col-md-3">
                                <div className="display-4 text-primary fw-bold">40%</div>
                                <p>Ahorro promedio</p>
                            </div>
                            <div className="col-md-3">
                                <div className="display-4 text-primary fw-bold">8</div>
                                <p>Países disponibles</p>
                            </div>
                            <div className="col-md-3">
                                <div className="display-4 text-primary fw-bold">5M+</div>
                                <p>kWh optimizados</p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='content-section my-5'>
                    <div className="container">
                        <h2><strong>Visión 🔭</strong></h2>
                        <p>
                            Ser la <span className="keyword">plataforma de referencia en gestión energética informada</span>, donde cada decisión de consumo se tome con datos claros y propósito ecológico.<br /><br />
                            <span className="keyword">🌍 Una comunidad activa</span> que comparte aprendizajes y mide su impacto ambiental colectivo.<br />
                            <span className="keyword">🤖 Tecnología predictiva</span> que anticipe consumos y sugiera ajustes automáticos (ej.: horarios de bajo costo).<br />
                            <span className="keyword">🔋 Integración con dispositivos del hogar</span> (IoT) para un control más eficiente.<br />
                            <span className="keyword">📢 Influencia en políticas públicas</span>, usando datos agregados para promover energías limpias.<br /><br />
                            En <span className="keyword">Solaris IQ</span>, no producimos energía, pero <span className="keyword">iluminamos el camino para consumirla de forma inteligente.</span>
                        </p>
                    </div>
                </section>
                <section className="team-section my-5 py-5 bg-light">
                    <div className="container">
                        <h2 className="text-center mb-5">Nuestro <span className="text-primary">Equipo</span></h2>
                        <div className="row justify-content-center">
                            {[
                                { name: "Adrian Barrera Garcia", role: "CEO", img: "team4.jpg", quote: "¡La energía sostenible debe ser accesible!" },
                            ].map((member, i) => (
                                <div className="col-md-4 mb-4" key={i}>
                                    <div className="card team-card h-100 border-0 shadow-sm">
                                        <div className="rounded-circle mx-auto mt-4 bg-light" style={{ width: "150px", height: "150px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <span className="display-3 text-muted">👤</span>
                                        </div>
                                        <div className="card-body text-center">
                                            <h5 className="card-title">{member.name}</h5>
                                            <p className="text-muted">{member.role}</p>
                                            <p className="card-text font-italic">"{member.quote}"</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="timeline-section my-5 py-5">
                    <div className="container">
                        <h2 className="text-center mb-5">Nuestra <span className="text-primary">Historia</span></h2>
                        <div className="timeline">
                            {[
                                { year: "2025", event: "Fundación de Solaris IQ", detail: "Nace como proyecto universitario" },
                            ].map((item, i) => (
                                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                                    <div className="timeline-content p-4 shadow-sm">
                                        <h5>{item.year}</h5>
                                        <h6 className="text-primary">{item.event}</h6>
                                        <p>{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className="cta-about text-center py-5 my-5 bg-primary text-white">
                    <div className="container">
                        <h3 className="mb-4">¿Listo para optimizar tu energía?</h3>
                        <button
                            className="btn btn-light btn-lg px-4"
                            onClick={() => navigate("/register")}>
                            Comienza ahora <i className="bi bi-arrow-right ms-2"></i>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}