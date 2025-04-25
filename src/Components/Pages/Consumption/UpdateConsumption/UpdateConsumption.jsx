import './UpdateConsumption.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { ConsumoCard } from './ConsumoCard';
import { motion } from 'framer-motion';
import Footer from '../../../Common/Footer/Footer';
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged';

export default function UpdateConsumption() {
  const [consumptions, setConsumptions] = useState([]);
  const [consumoSeleccionado, setConsumoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  const actualizarConsumo = async (formData) => {
    const csrfToken = getCookie('XSRF-TOKEN');
    try {
      const datosActualizados = {
        startDate: formData.startDate || null,
        endDate: formData.endDate || null,
        consumption: formData.consumption || null
      };

      const response = await axios.patch(
        `http://localhost:8080/users/consumptions/${formData.id}`,
        datosActualizados,
        { withCredentials: true,
          headers: { 
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': csrfToken
          }
         }
      );
      
      setConsumptions(prev => 
        prev.map(c => c.id === formData.id ? response.data : c)
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
                  <ConsumoCard
                    consumption={consumoSeleccionado}
                    onActualizar={actualizarConsumo}
                    onCancelar={() => setConsumoSeleccionado(null)}
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