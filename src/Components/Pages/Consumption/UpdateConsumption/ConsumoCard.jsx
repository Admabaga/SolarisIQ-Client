// ConsumoCard.jsx
import React, { useState } from 'react';
import './ConsumoCard.css';

export const ConsumoCard = ({ consumo, onActualizar, onCancelar }) => {
  const [form, setForm] = useState({
    id: consumo.id,
    startDate: consumo.startDate,
    endDate: consumo.endDate,
    consumption: consumo.consumption,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'consumption' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onActualizar(form);
  };

  return (
    <form className="consumo-card" onSubmit={handleSubmit}>
      <h3>Editar Consumo</h3>

      <label>
        Fecha Inicio:
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Fecha Fin:
        <input
          type="date"
          name="endDate"
          value={form.endDate}
          onChange={handleChange}
        />
      </label>

      <label>
        Consumo (kWh):
        <input
          type="number"
          step="0.01"
          name="consumption"
          value={form.consumption}
          onChange={handleChange}
        />
      </label>

      <div className="card-actions">
        <button type="submit">Actualizar</button>
        <button type="button" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
};
