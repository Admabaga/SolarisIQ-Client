import './StatsSection.css';

export default function StatsSection() {
  return (
    <div className="stats-section py-5 my-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-3">
            <div className="display-4 text-white fw-bold">15K+</div>
            <p>Usuarios activos</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 text-white fw-bold">40%</div>
            <p>Ahorro promedio</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 text-white fw-bold">8</div>
            <p>Países disponibles</p>
          </div>
          <div className="col-md-3">
            <div className="display-4 text-white fw-bold">5M+</div>
            <p>kWh optimizados</p>
          </div>
        </div>
      </div>
    </div>
  );
}