import React, { useState, useEffect } from 'react';
import './ConsumoCard.css';

export const ConsumoCard = ({ consumption, onActualizar, onCancelar }) => {
  const [form, setForm] = useState({
    id: '',
    startDate: '',
    endDate: '',
    consumption: ''
  });

  useEffect(() => {
    if (consumption) {
      // Convertir las fechas al formato que espera el input type="date" (YYYY-MM-DD)
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
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Preparar los datos para enviar
    const datosParaEnviar = {
      id: form.id,
      startDate: form.startDate ? `${form.startDate}T00:00:00.000Z` : null,
      endDate: form.endDate ? `${form.endDate}T00:00:00.000Z` : null,
      consumption: form.consumption ? parseFloat(form.consumption) : null
    };

    onActualizar(datosParaEnviar);
  };

  return (
    <form className="consumo-card" onSubmit={handleSubmit}>
      <h3>Editar Consumo</h3>

      <div className="form-group">
        <label>Fecha Inicio:</label>
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Fecha Fin:</label>
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label>Consumo (kWh):</label>
        <input
          type="number"
          step="0.01"
          name="consumption"
          value={form.consumption}
          onChange={handleChange}
          className="form-input"
          placeholder="Ingrese el consumo"
        />
      </div>

      <div className="card-actions">
        <button type="button" className="btn-cancelar" onClick={onCancelar}>
          Cancelar
        </button>
        <button type="submit" className="btn-actualizar">
          Actualizar
        </button>
      </div>
    </form>
  );
};