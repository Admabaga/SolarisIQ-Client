import React, { useState } from 'react';
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import ProfileHeader from '../../Common/Navs/ProfileHeader/ProfileHeader.jsx'
import ProfileForm from '../../Common/Forms/ProfileForm/ProfileForm.jsx'
import PasswordForm from '../../Common/Forms/PasswordForm/PasswordForm.jsx';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  return (
    <>
      <div className="profile-app-container">
        <NavBarLogged />
        <div className="profile-content-container">
          <ProfileHeader></ProfileHeader>
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
              <ProfileForm></ProfileForm>
            </div>
          ) : (
            <div className="profile-info-section">
              <PasswordForm></PasswordForm>
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