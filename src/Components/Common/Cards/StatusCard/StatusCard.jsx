import './StatusCard.css'
export default function StatusCard() {
    return (
        <>
            <div className="profile-permission-section">
                <h3>Permiso de la Sección de Servicios Profiles</h3>
                <div className="profile-stats">
                    <div className="stat-item">
                        <div className="stat-number">24</div>
                        <div className="stat-label">Proyectos</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">89%</div>
                        <div className="stat-label">Completados</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">1.2K</div>
                        <div className="stat-label">Seguidores</div>
                    </div>
                </div>
            </div>
        </>
    )
}