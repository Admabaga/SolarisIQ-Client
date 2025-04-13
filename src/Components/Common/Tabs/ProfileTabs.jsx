import React from 'react';
import './ProfileTabs.css';

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="profile-tabs-container">
      <nav className="profile-tabs-nav">
        <button
          onClick={() => setActiveTab('profile')}
          className={`profile-tab-button ${activeTab === 'profile' ? 'profile-tab-button-active' : ''}`}
        >
          Perfil
        </button>
        <button
          onClick={() => setActiveTab('password')}
          className={`profile-tab-button ${activeTab === 'password' ? 'profile-tab-button-active' : ''}`}
        >
          Contraseña
        </button>
      </nav>
    </div>
  );
};

export default ProfileTabs;