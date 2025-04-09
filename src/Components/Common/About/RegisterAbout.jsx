import './RegisterAbout.css';
import registerImg from '../../Images/register.png'; 

export default function RegisterAbout(){
    return(
        <>
        <div className="about-container my-5">
            <h2 className="text-center mb-4">Deja de adivinar, empieza a entender tu energía.</h2>
            <p>Con Solaris IQ, visualiza tu consumo al detalle y descubre cómo reducirlo inteligentemente. ¡Mantente informado sobre la revolución de las energías limpias y su impacto global!</p>
            <img src={registerImg} alt="registro" style={{ width: '100%', maxWidth: '400px' }} />

            </div>

        </>
    )
}