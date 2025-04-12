import { NavBarNotLogged } from '../../Common/Navs/NavBarNotLogged.jsx'
import Footer from '../../Common/Footer/Footer.jsx'
import './AboutUs.css'
export default function AboutUs() {
    return (
        <>
            <NavBarNotLogged></NavBarNotLogged>
            <div className='container my-5'>
                <div className='main-contentAboutUs mb-5 p-4 justify-content-center' style={{ width: '100%' }}>
                    <section className='my-3'>
                        <h2><strong>Misión 🧭</strong></h2>
                        <p><strong>Solaris IQ</strong> empodera a hogares y empresas para tomar el control de su energía a través de una plataforma intuitiva que monitorea, analiza y educa sobre consumo eléctrico y fuentes renovables. <br />
                            Nos enfocamos en: <br />
                            🔌 <strong>Optimizar el gasto energético</strong> en tiempo real, identificando patrones y oportunidades de ahorro. <br />
                            ☀️ <strong>Informar sobre energía renovable:</strong> producción local, incentivos y cómo adoptarla en la vida cotidiana. <br />
                            📉 <strong>Reducir la huella ambiental</strong> con métricas claras (ej.: "Este mes ahorraste el equivalente a 10 árboles"). <br />
                            🎓 <strong>Educar</strong> con contenido práctico para transitar hacia un estilo de vida sostenible. <br />
                            Somos el puente entre los usuarios y un <strong>futuro energético más limpio</strong>, sin generar energía, pero sí <strong>el conocimiento para usarla de forma consciente.</strong>
                        </p>
                    </section>
                    <section className='my-3'>
                        <h2><strong>Visión 🔭</strong></h2>
                        <p>Ser la <strong>plataforma de referencia en gestión energética informada</strong>, donde cada decisión de consumo se tome con datos claros y propósito ecológico. <br /> Visualizamos: <br />
                            🌍 <strong>Una comunidad activa</strong> que comparte aprendizajes y mide su impacto ambiental colectivo. <br />
                            🤖 <strong>Tecnología predictiva</strong> que anticipe consumos y sugiera ajustes automáticos (ej.: horarios de bajo costo). <br />
                            🔋 <strong>Integración con dispositivos del hogar</strong> (IoT) para un control más eficiente. <br />
                            📢 <strong>Influencia en políticas públicas</strong>, usando datos agregados para promover energías limpias. <br />
                            En <strong>Solaris IQ</strong>, no producimos energía, pero <strong>iluminamos el camino para consumirla de forma inteligente.</strong>
                        </p>
                    </section>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}