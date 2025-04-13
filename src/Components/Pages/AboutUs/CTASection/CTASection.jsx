import './CtaSection.css';
import { useNavigate } from 'react-router-dom';

export default function CtaSection() {
  const navigate = useNavigate();
  
  return (
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
  );
}