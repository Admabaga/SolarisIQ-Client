import './UpdateConsumption.css';
import { useState, useEffect } from 'react';
import { UpdateConsumptionCard } from '../../../Common/Cards/UpdateConsumptionCard/UpdateConsumptionCard';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast'
import Footer from '../../../Common/Footer/Footer';
import ApiClient from '../../../../Utils/ApiClient/ApiClient';
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged';

export default function UpdateConsumption() {
  const [consumptions, setConsumptions] = useState([]);
  const [consumoSeleccionado, setConsumoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const actualizarConsumo = async (formData) => {
    try {
      const datosActualizados = {
        startDate: formData.startDate || null,
        endDate: formData.endDate || null,
        consumption: formData.consumption || null
      };
      const response = await ApiClient.patch(`/users/consumptions/${formData.id}`,
        datosActualizados
      );
      setConsumptions(prev =>
        prev.map(c => c.id === formData.id ? response.data : c)
      );
      setConsumoSeleccionado(null);
      toast.success('¡Consumo actualizado correctamente!')
    } catch (err) {
      console.error("Error al actualizar consumo:", err);
      toast.error('Hubo un problema actualizando el consumo')
    }
  };

  useEffect(() => {
    const getConsumptions = async () => {
      try {
        const response = await ApiClient.get("/users/consumptions");
        setConsumptions(response.data);
        console.log(response.data)
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
    <>
      <div className="profile-app-container">
        <NavBarLogged />
        <div className="profile-content-container">
        <h2 className="consumptions-title ">Actualiza tus Consumos</h2>
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
                    className={`fila-consumo ${consumoSeleccionado?.id === consumption.id ? 'fila-seleccionada' : ''
                      }`}
                    onClick={() => setConsumoSeleccionado(consumption)}
                  >
                    <td>{new Date(consumption.startDate).toLocaleDateString()}</td>
                    <td>{new Date(consumption.endDate).toLocaleDateString()}</td>
                    <td>{consumption.consumption}</td>
                  </motion.tr>
                ))}
              </tbody>
            </motion.table>

            {consumoSeleccionado && (
              <div className="modal-overlay" onClick={() => setConsumoSeleccionado(null)}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                  <UpdateConsumptionCard
                    consumption={consumoSeleccionado}
                    onUpdate={actualizarConsumo}
                    onCancel={() => setConsumoSeleccionado(null)}
                  />
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}