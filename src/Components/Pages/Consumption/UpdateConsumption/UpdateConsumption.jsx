import './UpdateConsumption.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ConsumoCard } from './ConsumoCard';
import { motion } from 'framer-motion';

export default function UpdateConsumption() {
  const [consumptions, setConsumptions] = useState([]);
  const [consumoSeleccionado, setConsumoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const actualizarConsumo = async (actualizado) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/consumptions/${actualizado.id}`,
        actualizado,
        { withCredentials: true }
      );
      setConsumptions((prev) =>
        prev.map((c) => (c.id === actualizado.id ? response.data : c))
      );
      setConsumoSeleccionado(null);
    } catch (err) {
      console.error("Error al actualizar consumo:", err);
      alert("Hubo un problema actualizando el consumo.");
    }
  };

  useEffect(() => {
    const getConsumptions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/users/consumptions", {
          withCredentials: true
        });
        setConsumptions(response.data);
      } catch (error) {
        console.error("Error fetching consumptions:", error);
        setError("No pudimos cargar tus consumos. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    getConsumptions();
  }, []);

  if (loading) return <p>Cargando consumos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <motion.div 
      className="tabla-consumos-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.table 
        className="tabla-consumos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <thead>
          <tr>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Consumo (kWh)</th>
          </tr>
        </thead>
        <tbody>
          {consumptions.map((consumption) => (
            <motion.tr
              key={consumption.id}
              whileHover={{ scale: 1.01, backgroundColor: "#f0f4ff" }}
              className={`fila-consumo ${
                consumoSeleccionado?.id === consumption.id ? 'fila-seleccionada' : ''
              }`}
              onClick={() => setConsumoSeleccionado(consumption)}
            >
              <td>{consumption.startDate}</td>
              <td>{consumption.endDate}</td>
              <td>{consumption.consumption}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>

      {consumoSeleccionado && (
        <div className="modal-overlay" onClick={() => setConsumoSeleccionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ConsumoCard
              consumo={consumoSeleccionado}
              onActualizar={actualizarConsumo}
              onCancelar={() => setConsumoSeleccionado(null)}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}