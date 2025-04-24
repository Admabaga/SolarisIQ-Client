import './ConsumptionCard.css'
import imgCard from '../../../Images/SolarisIconDark.png'
import { FaCalendarAlt } from 'react-icons/fa'
import FormatDateTime from '../../DateConverter/DateConeverter'

export default function ConsumptionCard({ startDate, endDate, consumptionValue }) {
    return (
        <div className="consumption-card">
            <img src={imgCard} alt="Consumo energético" className="card-image" />
            <div className="card-content">
                <h3 className="card-title">
                    <FaCalendarAlt /> Periodo de consumo
                </h3>
                <p className="card-period">
                    Del <strong>{FormatDateTime(startDate)}</strong><br />
                    al <strong>{FormatDateTime(endDate)}</strong>
                </p>
                <p className="card-value">
                    {consumptionValue} kWh
                </p>
            </div>
        </div>
    )
}
