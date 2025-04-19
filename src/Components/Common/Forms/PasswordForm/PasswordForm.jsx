import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import './PaswordForm.css';

const PasswordForm = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirm: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = getCookie('XSRF-TOKEN');

    if (passwords.newPassword !== passwords.confirm) {
      toast.error('Las contraseñas no coinciden');
      return;
    }

    setIsLoading(true);
    try {
      await axios.patch('http://localhost:8080/users/updatePassword', passwords, {
        withCredentials: true,
        headers: { 
          'Content-Type': 'application/json',
          'X-XSRF-TOKEN': csrfToken
        },
      });

      toast.success('¡Contraseña actualizada correctamente!');
      setPasswords({ oldPassword: '', newPassword: '', confirm: '' });
    } catch (error) {
      toast.error('Error al actualizar la contraseña');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form-container">
      <div className="profile-form-group">
        <label className="profile-form-label">Contraseña Actual</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={passwords.oldPassword}
            onChange={(e) => setPasswords({ ...passwords, oldPassword: e.target.value })}
            className="profile-form-input"
          />
          <span
            className="profile-password-toggle"
            onClick={toggleShowPassword}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Nueva Contraseña</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={passwords.newPassword}
            onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            className="profile-form-input"
          />
          <span
            className="profile-password-toggle"
            onClick={toggleShowPassword}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <div className="profile-password-strength">
          <div
            className="profile-strength-bar"
            style={{
              width: `${Math.min(passwords.newPassword.length * 10, 100)}%`,
              background: passwords.newPassword.length >= 8 ? '#48bb78' : '#e53e3e',
            }}
          />
        </div>
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Confirmar Contraseña</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={passwords.confirm}
            onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
            className="profile-form-input"
          />
          <span
            className="profile-password-toggle"
            onClick={toggleShowPassword}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="profile-submit-button"
        disabled={!passwords.oldPassword || !passwords.newPassword || !passwords.confirm || isLoading}
      >
        {isLoading ? 'Procesando...' : 'Cambiar Contraseña'}
      </button>
    </form>
  );
};

export default PasswordForm;