import './CountryUpdate.css'
import React, { useState, useEffect } from 'react'

export const CountryUpdate = ({ country, onUpdate, onCancel }) => {
  const [form, setForm] = useState({
    id: '',
    name: ''
  })

  useEffect(() => {
    if (country) {
      setForm({
        id: country.id,
        name: country.name || ''
      })
    }
  }, [country])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(form)
  }

  return (
    <form className="updateConsumptionCard-container" onSubmit={handleSubmit}>
      <h3 className="updateConsumptionCard-title">Editar País</h3>

      <div className="updateConsumptionCard-formGroup">
        <label className="updateConsumptionCard-label">Nombre del país:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="updateConsumptionCard-input"
          placeholder="Ej: Colombia"
          required
        />
      </div>

      <div className="updateConsumptionCard-actions">
        <button type="button" className="updateConsumptionCard-btnCancel" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="updateConsumptionCard-btnUpdate">
          Actualizar
        </button>
      </div>
    </form>
  )
}
