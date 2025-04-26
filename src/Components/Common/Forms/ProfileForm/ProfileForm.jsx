import { toast } from 'react-hot-toast';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import './ProfileForm.css';

const ProfileForm = ({formData, setFormData}) => {

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await ApiClient.patch('/users', formData)
      toast.success('Perfil actualizado correctamente!')
    } catch (error) {
      console.error('Error al actualizar:', error);
      toast.error(error.response?.data?.message || 'Error al actualizar')
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