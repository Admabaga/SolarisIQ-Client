import React, { useState, useEffect } from 'react';
import './ProfileHeader.css';

const ProfileHeader = ({ formData }) => {
  const defaultAvatar = 'https://randomuser.me/api/portraits/men/1.jpg';
  
  const [avatar, setAvatar] = useState(() => {
    return localStorage.getItem('userAvatar') || defaultAvatar;
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const newAvatar = event.target.result;
        setAvatar(newAvatar);
        localStorage.setItem('userAvatar', newAvatar);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-header-card">
      <label htmlFor="avatar-upload">
        <img src={avatar} alt="Avatar" className="profile-avatar" />
        <input
          id="avatar-upload"
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          style={{ display: 'none' }}
        />
      </label>

      <div className="profile-user-info">
        <h2>{formData.name}</h2>
        <p>Desarrollador Frontend</p>
        <p>Miembro desde: Enero 2023</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
