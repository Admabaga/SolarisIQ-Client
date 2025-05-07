import './GetCountries.css'
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged'
import Footer from '../../../Common/Footer/Footer'
import ApiClient from '../../../../Utils/ApiClient/ApiClient';

export default function GetCountries() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const response = await ApiClient.get('/countries');
          setCountries(response.data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchCountries();
    }, []);
  
    const handleLearnMore = (countryName) => {
      alert(`Más información sobre: ${countryName}`);
    };
  
    if (loading) {
      return <div className="loading-spinner">Cargando países...</div>;
    }
  
    if (error) {
      return <div className="error-message">Error: {error}</div>;
    }
  
    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <div className="countries-container">
                        <h1 className="gallery-title">Países del Mundo</h1>
                        <div className="countries-grid">
                            {countries.map((country) => (
                                <CountryCard
                                    key={country.cca3}
                                    country={country.name.common}
                                    flagEmoji={country.flag}
                                    capital={country.capital?.[0] || 'Sin capital'}
                                    population={country.population.toLocaleString()}
                                    region={country.region}
                                    onLearnMore={() => handleLearnMore(country.name.common)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}