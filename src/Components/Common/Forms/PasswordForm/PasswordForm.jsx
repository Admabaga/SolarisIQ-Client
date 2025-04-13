import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import './PaswordForm.css';

const PasswordForm = () => {
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const hasMinLength = password.length >= 8;
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    return hasMinLength && hasNumber && hasSpecialChar;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!passwords.current) newErrors.current = 'La contraseña actual es requerida';
    if (!validatePassword(passwords.new)) {
      newErrors.new = 'La contraseña debe tener 8+ caracteres, un número y un símbolo (!@#$%^&*)';
    }
    if (passwords.new !== passwords.confirm) {
      newErrors.confirm = 'Las contraseñas no coinciden';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error('Por favor corrige los errores');
      return;
    }

    toast.success('¡Contraseña actualizada correctamente!');
    setPasswords({ current: '', new: '', confirm: '' });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="profile-form-container">
      <div className="profile-form-group">
        <label className="profile-form-label">Contraseña Actual</label>
        <div style={{ position: 'relative' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={passwords.current}
            onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
            className="profile-form-input"
          />
          <span
            className="profile-password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        {errors.current && (
          <span className="profile-error-message">{errors.current}</span>
        )}
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Nueva Contraseña</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwords.new}
          onChange={(e) => {
            setPasswords({ ...passwords, new: e.target.value });
            setErrors({ ...errors, new: '' });
          }}
          className="profile-form-input"
        />
        <div className="profile-password-strength">
          <div
            className="profile-strength-bar"
            style={{
              width: `${Math.min(passwords.new.length * 10, 100)}%`,
              background: passwords.new.length >= 8 ? '#48bb78' : '#e53e3e',
            }}
          />
        </div>
        {errors.new && (
          <span className="profile-error-message">{errors.new}</span>
        )}
      </div>

      <div className="profile-form-group">
        <label className="profile-form-label">Confirmar Contraseña</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={passwords.confirm}
          onChange={(e) => {
            setPasswords({ ...passwords, confirm: e.target.value });
            setErrors({ ...errors, confirm: '' });
          }}
          className="profile-form-input"
        />
        {errors.confirm && (
          <span className="profile-error-message">{errors.confirm}</span>
        )}
      </div>

      <button
        type="submit"
        className="profile-submit-button"
        disabled={!passwords.current || !passwords.new || !passwords.confirm}
      >
        Cambiar Contraseña
      </button>
    </form>
  );
};

export default PasswordForm;