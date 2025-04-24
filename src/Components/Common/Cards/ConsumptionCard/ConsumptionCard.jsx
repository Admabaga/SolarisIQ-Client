import './ConsumptionCard.css';
import { FaLeaf, FaExclamationTriangle, FaFire, FaSnowflake } from 'react-icons/fa';

export default function ConsumptionCard({ consumptionValue, startDate, endDate }) {
    const consumption = parseInt(consumptionValue);

    let zone = '', icon = null, zoneClass = '', description = '', causes = [], recommendation = '';

    if (consumption >= 150 && consumption <= 300) {
        zone = 'Zona Verde (150-300 kWh/mes)';
        icon = <FaLeaf className="zone-icon" />;
        zoneClass = 'green-zone';
        description = 'Nivel ideal de consumo energético.';
        causes = [
            'Uso eficiente de energía',
            'Electrodomésticos optimizados',
            'Factura mensual económica'
        ];
        recommendation = 'Mantén tus buenos hábitos. ¡Excelente!';
    } else if (consumption > 300 && consumption <= 450) {
        zone = 'Zona Amarilla (301-450 kWh/mes)';
        icon = <FaExclamationTriangle className="zone-icon" />;
        zoneClass = 'yellow-zone';
        description = 'Consumo moderadamente alto.';
        causes = [
            'Equipos pesados frecuentes',
            'Prácticas poco eficientes',
            'Más habitantes o electrodomésticos'
        ];
        recommendation = 'Revisa hábitos y optimiza tu consumo.';
    } else if (consumption > 450) {
        zone = 'Zona Roja (>450 kWh/mes)';
        icon = <FaFire className="zone-icon" />;
        zoneClass = 'red-zone';
        description = 'Consumo excesivo que requiere atención.';
        causes = [
            'Uso continuo de equipos',
            'Muchos electrodomésticos a la vez',
            'Posibles fugas o desperdicios'
        ];
        recommendation = 'Haz una auditoría y reduce el consumo.';
    } else {
        zone = 'Zona Azul (<150 kWh/mes)';
        icon = <FaSnowflake className="zone-icon" />;
        zoneClass = 'blue-zone';
        description = 'Consumo bajo y eficiente.';
        causes = [
            'Altísima eficiencia energética',
            'Facturación mínima'
        ];
        recommendation = '¡Sigue así! Excelente ahorro.';
    }

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
        return `${date.getDate()} ${months[date.getMonth()]}`;
    };

    return (
        <div className={`consumption-card ${zoneClass}`}>
            <div className="ConsumptionCard-header">
                {icon}
                <div>
                    <h2>{zone}</h2>
                    <p className="period">
                        <strong>Período:</strong> {formatDate(startDate)} a {formatDate(endDate)}
                    </p>
                </div>
            </div>
            <p className="description">{description}</p>
            <h4>Causas comunes:</h4>
            <ul className="causes">
                {causes.map((c, i) => (
                    <li key={i}>{c}</li>
                ))}
            </ul>
            <div className="footerConsumptionCard">
                <p><strong>Consumo actual:</strong> {consumptionValue} kWh</p>
                <p className="recommendation">{recommendation}</p>
            </div>
        </div>
    );
}
