import { NavBarNotLogged } from '../../Common/Navs/NavBarNotLogged/NavBarNotLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import Hero from '../../Images/EolicEnergy.svg';
import { useNavigate } from 'react-router-dom';
import StatsSection from './StatsSection/StatsSection.jsx';
import TeamSection from './TeamSection/TeamSection.jsx';
import TimelineSection from './TimeLineSection/TimeLineSection.jsx';
import CtaSection from './CTASection/CTASection.jsx';
import './AboutUs.css';

export default function AboutUs() {
    const navigate = useNavigate();

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
                            En <span className="keyword">Solaris IQ</span>, promovemos la conciencia energética y ambiental mediante una plataforma tecnológica intuitiva que empodera a hogares y empresas para monitorear, analizar y reducir su consumo diario.<br /><br />
                            <span className="keyword">🔌 Optimizamos el gasto energético</span> en tiempo real, identificando patrones y oportunidades de ahorro.<br />
                            <span className="keyword">☀️ Informamos sobre energía renovable</span>: producción local, incentivos y cómo adoptarla en la vida cotidiana.<br />
                            <span className="keyword">📉 Reducimos la huella ambiental</span> con métricas claras (ej.: “Este mes ahorraste el equivalente a 10 árboles”).<br />
                            <span className="keyword">🎓 Educamos</span> con contenido práctico para fomentar un estilo de vida sostenible con impacto real en el medio ambiente y la economía personal.<br /><br />
                            Somos el puente entre los usuarios y un <span className="keyword">futuro energético más limpio</span>, sin generar energía, pero sí el <span className="keyword">conocimiento para usarla de forma consciente</span>.
                        </p>
                    </div>
                </section>
                <StatsSection />
                <section className='content-section my-5'>
                    <div className="container">
                        <h2><strong>Visión 🔭</strong></h2>
                        <p>
                            Nuestra visión es ser la <span className="keyword">plataforma de referencia en gestión energética informada</span>, donde cada decisión de consumo se tome con datos claros y propósito ecológico.<br /><br />
                            Aspiramos a construir una <span className="keyword">comunidad global informada y comprometida</span> con la transición hacia energías limpias, donde cada acción personal se traduzca en un paso hacia un planeta más saludable.<br /><br />
                            <span className="keyword">🌍 Comunidad activa</span> que comparte aprendizajes y mide su impacto ambiental colectivo.<br />
                            <span className="keyword">🤖 Tecnología predictiva</span> que anticipe consumos y sugiera ajustes automáticos (como aprovechar horarios de bajo costo).<br />
                            <span className="keyword">🔋 Integración con dispositivos IoT</span> del hogar para un control más eficiente.<br />
                            <span className="keyword">📢 Influencia en políticas públicas</span>, usando datos agregados para promover el uso de energías renovables.<br /><br />
                            En <span className="keyword">Solaris IQ</span>, no producimos energía, pero <span className="keyword">iluminamos el camino para consumirla de forma inteligente</span>.
                        </p>
                    </div>
                </section>
                <TeamSection />
                <TimelineSection />
                <CtaSection />
            </div>
            <Footer />
        </>
    );
}
