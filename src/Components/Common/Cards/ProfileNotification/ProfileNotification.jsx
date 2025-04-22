import './ProfileNotification.css'
export default function ProfileNotification() {
    return (
        <>
            <div className="profile-notifications">
                <h3>Notificaciones</h3>
                <div style={{ marginTop: '1rem' }}>
                    <div className="notification-item">
                        <span>Notificaciones por Email</span>
                        <label className="notification-toggle-label">
                            <input type="checkbox" defaultChecked className="notification-toggle-input" />
                            <span className="notification-toggle-slider"></span>
                        </label>
                    </div>
                    <div className="notification-item">
                        <span>Notificaciones Push</span>
                        <label className="notification-toggle-label">
                            <input type="checkbox" className="notification-toggle-input" />
                            <span className="notification-toggle-slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}