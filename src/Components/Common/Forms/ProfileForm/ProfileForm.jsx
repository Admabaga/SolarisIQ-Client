import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './ProfileForm.css';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: 'Juan Pérez',
    email: 'juan@example.com',
    phone: '+51 987654321',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Perfil actualizado correctamente!');
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form-container">
      <div className="profile-form-group">
        <label className="profile-form-label">Nombre</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="profile-form-input"
        />
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="profile-form-input"
        />
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Teléfono</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="profile-form-input"
        />
      </div>

      <button type="submit" className="profile-submit-button">
        Guardar Cambios
      </button>
    </form>
  );
};

export default ProfileForm;