import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

import './ConsumptionGraph.css';

const CustomTick = ({ x, y, payload }) => {
    const [start, end] = payload.value.split(" - ");
    return (
        <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="middle" fill="#666" fontSize="12">
                {start}
            </text>
            <text x={0} y={20} dy={16} textAnchor="middle" fill="#666" fontSize="12">
                {end}
            </text>
        </g>
    );
};

export default function ConsumptionGraph({ data }) {
    const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

    const formatPeriod = (startDateStr, endDateStr) => {
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);
        const startLabel = `${months[start.getMonth()]} ${start.getDate()}`;
        const endLabel = `${months[end.getMonth()]} ${end.getDate()}`;
        return `${startLabel} - ${endLabel}`;
    };

    const formattedData = data.map(item => ({
        name: formatPeriod(item.startDate, item.endDate),
        Consumo: item.consumption
    }));

    return (
        <div className="chart-wrapper">
            <h3 className="chart-title">Tendencia de Consumo Energético</h3>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={formattedData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 40 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tick={<CustomTick />}
                        interval={0}
                    />
                    <YAxis />
                    <Tooltip
                        formatter={(value) => `${value} kWh`}
                        labelFormatter={(label) => `Período: ${label}`}
                    />
                    <Line
                        type="monotone"
                        dataKey="Consumo"
                        stroke="#56ab2f"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
