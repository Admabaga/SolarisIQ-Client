import React, { useState, useEffect } from 'react';
import './UpdateConsumptionCard.css';

export const UpdateConsumptionCard = ({ consumption, onUpdate, onCancel }) => {
  const [form, setForm] = useState({
    id: '',
    startDate: '',
    endDate: '',
    consumption: ''
  });

  useEffect(() => {
    if (consumption) {
      const startDate = consumption.startDate ? consumption.startDate.split('T')[0] : '';
      const endDate = consumption.endDate ? consumption.endDate.split('T')[0] : '';
      setForm({
        id: consumption.id,
        startDate,
        endDate,
        consumption: consumption.consumption || ''
      });
    }
  }, [consumption]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      id: form.id,
      startDate: form.startDate ? `${form.startDate}T00:00:00.000Z` : null,
      endDate: form.endDate ? `${form.endDate}T00:00:00.000Z` : null,
      consumption: form.consumption ? parseFloat(form.consumption) : null
    };
    onUpdate(updatedData);
  };

  return (
    <form className="updateConsumptionCard-container" onSubmit={handleSubmit}>
      <h3 className="updateConsumptionCard-title">Editar Consumo</h3>

      <div className="updateConsumptionCard-formGroup">
        <label className="updateConsumptionCard-label">Fecha inicio:</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="updateConsumptionCard-input"
        />
      </div>

      <div className="updateConsumptionCard-formGroup">
        <label className="updateConsumptionCard-label">Fecha finalizacion:</label>
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="updateConsumptionCard-input"
        />
      </div>

      <div className="updateConsumptionCard-formGroup">
        <label className="updateConsumptionCard-label">Consumo (kWh):</label>
        <input
          type="number"
          step="0.01"
          name="consumption"
          value={form.consumption}
          onChange={handleChange}
          className="updateConsumptionCard-input"
          placeholder="Enter consumption"
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
  );
};
