import { NavBarLogged } from "../../../Common/Navs/NavBarLogged/NavBarLogged";
import axios from "axios";
import Footer from "../../../Common/Footer/Footer";
import ConsumptionCard from "../../../Common/Cards/ConsumptionCard/ConsumptionCard";
import { useState, useEffect } from "react";

export default function GetConsumptions() {
    const [consumptions, setConsumptions] = useState([]);

    useEffect(() => {
        const getConsumptions = async () => {
            try {
                const response = await axios.get("http://localhost:8080/users/consumptions", {
                    withCredentials: true
                });
                setConsumptions(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };

        getConsumptions();
    }, []);

    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row row-cols-1 row-cols-md-4 g-4">
                                {consumptions.map((consumption, index) => (
                                    <ConsumptionCard
                                        key={index}
                                        startDate={consumption.startDate}
                                        endDate={consumption.endDate}
                                        consumptionValue={consumption.consumption}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
