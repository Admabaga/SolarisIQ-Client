import './UpdateCountry.css'
import { useState, useEffect } from 'react';
import { CountryUpdate } from '../../../Common/Cards/CountryUpdate/CountryUpdate';
import { motion } from 'framer-motion'
import { toast } from 'react-hot-toast'
import Footer from '../../../Common/Footer/Footer'
import ApiClient from '../../../../Utils/ApiClient/ApiClient'
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged'

export default function UpdateCountry() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const updateCountry = async (formData) => {
      try {
        const dataUpdate = {
          name: formData.name || null
        };
  
        const response = await ApiClient.patch(
          `/countries/${formData.id}`,
          dataUpdate
        );
  
        setCountries(prev =>
          prev.map(c => (c.id === formData.id ? response.data : c))
        );
  
        setCountry(null);
        toast.success('Pais actualizado correctamente!');
      } catch (err) {
        console.error("Error al actualizar pais:", err);
        toast.error('Hubo un problema actualizando el pais');
      }
    };
  
    useEffect(() => {
      const getCountries = async () => {
        try {
          const response = await ApiClient.get("/countries");
          setCountries(response.data);
        } catch (error) {
          toast.error("No pudimos cargar los paises. Intenta nuevamente.")
        } finally {
          setLoading(false);
        }
      };
  
      getCountries();
    }, []);
  
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <h2 className="consumptions-title">Actualiza un pais</h2>
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status" aria-label="Cargando..."></div>
                            <span className="m-1">Cargando paises...</span>
                        </div>
                    ) : error ? (
                        <p className="text-danger text-center">{error}</p>
                    ) : (
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
                                        <th>Nombre</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {countries.map((countries) => (
                                        <motion.tr
                                            key={countries.id}
                                            whileHover={{ scale: 1.01, backgroundColor: "#f0f4ff" }}
                                            className={`fila-consumo ${country?.id === countries.id ? 'fila-seleccionada' : ''}`}
                                            onClick={() => setCountry(countries)}
                                        >
                                            <td>{countries.name}</td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </motion.table>

                            {country && (
                                <div className="modal-overlay" onClick={() => setCountry(null)}>
                                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                        <CountryUpdate
                                            country={country}
                                            onUpdate={updateCountry}
                                            onCancel={() => setCountry(null)}
                                        />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}