import React, { useState, useEffect } from 'react';
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import ProfileHeader from '../../Common/Navs/ProfileHeader/ProfileHeader.jsx'
import ProfileForm from '../../Common/Forms/ProfileForm/ProfileForm.jsx'
import PasswordForm from '../../Common/Forms/PasswordForm/PasswordForm.jsx';
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users', {
          withCredentials: true
        }); 
        setFormData(response.data);
      } catch (error) {
        console.error('Error al obtener usuario:', error);
        if (error.response?.status === 403) {
          toast.error('Acceso denegado. Verifica tu autenticación.');
          console.log('Detalles del error 403:', error.response.data);
        }
      }
    };
    
    getUser();
  }, []);

  return (
    <>
      <div className="profile-app-container">
        <NavBarLogged />
        <div className="profile-content-container">
          <ProfileHeader
            formData = {formData}
          ></ProfileHeader>
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
              <ProfileForm
                formData = {formData}
                setFormData = {setFormData}
              ></ProfileForm>
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