import React, { useState, useEffect } from 'react';
import { NavBarLogged } from '../../Common/Navs/NavBarLogged/NavBarLogged.jsx';
import Footer from '../../Common/Footer/Footer.jsx';
import ProfileHeader from '../../Common/Cards/ProfileHeader/ProfileHeader.jsx'
import ProfileForm from '../../Common/Forms/ProfileForm/ProfileForm.jsx'
import PasswordForm from '../../Common/Forms/PasswordForm/PasswordForm.jsx';
import StatusCard from '../../Common/Cards/StatusCard/StatusCard.jsx';
import ProfileNotification from '../../Common/Cards/ProfileNotification/ProfileNotification.jsx';
import ApiClient from '../../../Utils/ApiClient/ApiClient.jsx';
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
        const response = await ApiClient.get('/users', {
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
            formData={formData}
          ></ProfileHeader>
          <StatusCard></StatusCard>
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
                formData={formData}
                setFormData={setFormData}
              ></ProfileForm>
            </div>
          ) : (
            <div className="profile-info-section">
              <PasswordForm></PasswordForm>
            </div>
          )}
          <ProfileNotification></ProfileNotification>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;