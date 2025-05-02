import React, { useState, useEffect } from 'react'
import './ProfileHeader.css'
import ApiClient from '../../../../Utils/ApiClient/ApiClient'
import { toast } from 'react-hot-toast'

const ProfileHeader = ({ formData, onAvatarUpdate }) => {
  const [avatar, setAvatar] = useState(formData.image);
  const [previousAvatarUrl, setPreviousAvatarUrl] = useState(formData.image);

  useEffect(() => {
    if (formData.image) {
      const fullImageUrl = formData.image.startsWith('http') ?
        formData.image :
        `http://localhost:8080${formData.image}`;
      setAvatar(fullImageUrl);
      setPreviousAvatarUrl(fullImageUrl);
    }
  }, [formData.image]);

  const handleAvatarChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 100 * 1024 * 1024) {
      toast.error('La imagen es demasiado grande (máximo 100MB).');
      return;
    }
    if (!file.type.match('image.*')) {
      toast.error('Por favor selecciona un archivo de imagen válido.');
      return;
    }
    const currentAvatar = avatar;
    setPreviousAvatarUrl(currentAvatar);
    const previewUrl = URL.createObjectURL(file);
    setAvatar(previewUrl);
    const uploadData = new FormData();
    uploadData.append('image', file);

    try {
      const response = await ApiClient.patch('/users/updateImage', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const serverAvatarUrl = response.data
      setAvatar(serverAvatarUrl)
      toast.success("¡Imagen de perfil actualizada correctamente!")
      if (onAvatarUpdate) {
        onAvatarUpdate(serverAvatarUrl)
      }
      URL.revokeObjectURL(previewUrl)

    } catch (error) {
      setAvatar(previousAvatarUrl)
      toast.error('Error al actualizar el avatar: ' + (error.response?.data?.error || error.message))
      URL.revokeObjectURL(previewUrl)
    }
  }

  return (
    <div className="profile-header-card">
      <label htmlFor="avatar-upload" className="avatar-upload-label">
        <img
          src={avatar}
          alt="Avatar"
          className="profile-avatar"
          onError={(e) => {
            e.target.onerror = null;
          }}
        />
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
        <p>{formData.email}</p>
        <p>{formData.rol}</p>
      </div>
    </div>
  )
}

export default ProfileHeader;