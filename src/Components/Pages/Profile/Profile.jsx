import React, { useState } from 'react';
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+51 987654321'
  });
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  const [avatar, setAvatar] = useState('https://randomuser.me/api/portraits/men/1.jpg');

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="profile-app-container">
        <NavBarLogged />
        <div className="profile-content-container">
          <div className="profile-header">
            <div className="profile-header-content">
              <label htmlFor="avatar-upload" className="profile-avatar-label">
                <img
                  src={avatar}
                  alt="Avatar"
                  className="profile-avatar-image"
                />
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />
              </label>
              <div>
                <h1>Solaris IQ</h1>
                <h2>{formData.name}</h2>
                <p>Desarrollador Frontend</p>
                <p className="member-since">Miembro desde: Enero 2023</p>
              </div>
            </div>
          </div>
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
          <div className="profile-tabs-container">
            <nav className="profile-tabs-nav">
              <button
                onClick={() => setActiveTab('profile')}
                className={`profile-tab-button ${activeTab === 'profile' ? 'profile-tab-button--active' : ''}`}
              >
                Perfil
                {activeTab === 'profile' && <div className="profile-tab-indicator"></div>}
              </button>
              <button
                onClick={() => setActiveTab('password')}
                className={`profile-tab-button ${activeTab === 'password' ? 'profile-tab-button--active' : ''}`}
              >
                Contraseña
                {activeTab === 'password' && <div className="profile-tab-indicator"></div>}
              </button>
            </nav>
          </div>
          {activeTab === 'profile' ? (
            <div className="profile-info-section">
              <div className="info-group">
                <h4>Nombre</h4>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div className="info-group">
                <h4>Email</h4>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="info-group">
                <h4>Teléfono</h4>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <button className="profile-save-btn">Guardar Cambios</button>
            </div>
          ) : (
            <div className="profile-info-section">
              <div className="info-group">
                <h4>Contraseña Actual</h4>
                <input
                  type="password"
                  value={passwords.current}
                  onChange={(e) => setPasswords({...passwords, current: e.target.value})}
                />
              </div>
              <div className="info-group">
                <h4>Nueva Contraseña</h4>
                <input
                  type="password"
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                />
                <div className="password-progress-bar-container">
                  <div
                    className={`password-progress-bar ${passwords.new.length >= 8 ? 'password-progress-bar--strong' : ''}`}
                    style={{ width: `${Math.min(passwords.new.length * 10, 100)}%` }}
                  ></div>
                </div>
              </div>
              <div className="info-group">
                <h4>Confirmar Contraseña</h4>
                <input
                  type="password"
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                />
              </div>
              <button className="profile-save-btn">Cambiar Contraseña</button>
            </div>
          )}
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;