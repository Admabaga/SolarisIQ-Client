import './LobbyCard.css';

export default function LobbyCard({ tittle, description, onClick, textButton }) {
    return (
        <div className="lobby-card">
            <h2>{tittle}</h2>
            <p>{description}</p>
            <button className="lobby-card-button" onClick={onClick}>
                {textButton}
            </button>
        </div>
    );
}
