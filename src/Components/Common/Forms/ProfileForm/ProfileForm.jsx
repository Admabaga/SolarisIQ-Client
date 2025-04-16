import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './ProfileForm.css';

const ProfileForm = () => {
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

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch('http://localhost:8080/users', formData, {
        withCredentials: true
      });
      toast.success('Perfil actualizado correctamente!');
    } catch (error) {
      console.error('Error al actualizar:', error);
      toast.error(error.response?.data?.message || 'Error al actualizar');
    }
  };

  return (
    <form onSubmit={updateUser} className="profile-form-container">
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