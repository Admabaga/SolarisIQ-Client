import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../Images/Logo.png';
import { ValidationLogOut } from '../../ValidationLogOut/ValidationLogOut.jsx';
import getUserRoleFromToken from '../../../../Utils/GetRole/getUserRoleFromToken.jsx'
import axios from 'axios';
import '../NavBarNotLogged/Navs.css';
import './VerticalNav.css';

export function NavBarLogged() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const role = localStorage.getItem("role");
        setUserRole(role);
    }, []);

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const handleLogout = async () => {
        // try {
        //     const response = await axios.post('http://localhost:8080/users/logout',{
        //         withCredentials: true,
        //         headers: { 
        //           'Content-Type': 'application/json',
        //           'X-XSRF-TOKEN': csrfToken
        //         },
        //       })
        //     eliminarJWTCookie('jwt');
        //     Cookies.remove('XSRF-TOKEN', { path: '/' })

        navigate('/', { replace: true });
        window.location.reload();
        //     console.log(response.data);
        // } catch (error) {
        //     console.log("error al eliminar jwt" + error.message);
        // }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="navbar-vertical-container">
            <nav className="navbar navbar-dark navbar-vertical">
                <div className="container-fluid flex-column align-items-start">
                    <div className="d-flex w-100 align-items-center justify-content-between d-lg-none mobile-header">
                        <div className="mobile-logo">
                            <img src={Logo} alt="Solaris IQ Logo" />
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={toggleMobileMenu}
                            aria-expanded={mobileMenuOpen}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="d-none d-lg-flex flex-column align-items-center w-100 desktop-header">
                        <div className="desktop-logo">
                            <img src={Logo} alt="Solaris IQ Logo" />
                        </div>
                        <a className="navbar-brand mb-4" href="/lobby">Solaris IQ</a>
                    </div>
                    <div className={`mobile-menu ${mobileMenuOpen ? 'show' : ''} d-lg-none w-100`}>
                        <ul className="navbar-nav flex-column w-100">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="/lobby"
                                    end
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div
                                    className={`nav-link ${openSubmenu === 'energiasRenovables' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('energiasRenovables')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Energias renovables
                                </div>
                                {openSubmenu === 'energiasRenovables' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaEolica"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Energia eolica
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaHidroelectrica"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Energia hidroelectrica
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaSolar"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Energia solar
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <div
                                    className={`nav-link ${openSubmenu === 'consumos' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('consumos')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Consumos
                                </div>
                                {openSubmenu === 'consumos' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/registroConsumo"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Agrega tus consumos
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/misConsumos"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Mis consumos
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/actualizarConsumos"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Actualiza tus consumos
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="/profile"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Profile
                                </NavLink>
                            </li>
                            {userRole === 'ADMIN' && (
                                <>
                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'countries' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('countries')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Paises
                                    </div>
                                    {openSubmenu === 'countries' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/createCountry"
                                                >
                                                    Agregar pais
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/updateCountry"
                                                >
                                                    Actualizar Pais
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/getCountries"
                                                >
                                                    Ver Paises
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'renewableEnergyConsumption' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('renewableEnergyConsumption')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Consumo energia renovable
                                    </div>
                                    {openSubmenu === 'renewableEnergyConsumption' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/createRenewableEnergyConsumption"
                                                >
                                                    Agregar consumo
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/updateRenewableEnergyConsumption"
                                                >
                                                    Actualizar consumo
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/getRenewableEnergyConsumption"
                                                >
                                                    Ver consumos
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'renewableEnergyProduction' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('renewableEnergyProduction')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Produccion energia renovable
                                    </div>
                                    {openSubmenu === 'renewableEnergyProduction' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/createRenewableEnergyProduction"
                                                >
                                                    Agregar produccion
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/updateRenewableEnergyProduction"
                                                >
                                                    Actualizar produccion
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/getRenewableEnergyProduction"
                                                >
                                                    Ver produccion
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'energyIndicator' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('energyIndicator')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Indicador de energia
                                    </div>
                                    {openSubmenu === 'energyIndicator' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/createEnergyIndicator"
                                                >
                                                    Agregar indicador
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/updateEnergyIndicator"
                                                >
                                                    Actualizar indicador
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/getEnergyIndicator"
                                                >
                                                    Ver indicadores
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                </>
                            )}
                            <li className="nav-item logout-item">
                                <button
                                    className="nav-link logout-btn"
                                    onClick={() => {
                                        setShowLogoutModal(true);
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="d-none d-lg-flex flex-column w-100 desktop-menu">
                        <ul className="navbar-nav flex-column w-100">
                            <li className="nav-item">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="/lobby"
                                    end
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <div
                                    className={`nav-link ${openSubmenu === 'energiasRenovables' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('energiasRenovables')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Energias renovables
                                </div>
                                {openSubmenu === 'energiasRenovables' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaEolica"
                                            >
                                                Energia eolica
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaHidroelectrica"
                                            >
                                                Energia Hidroelectrica
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/energiasRenovables/energiaSolar"
                                            >
                                                Energia solar
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <div
                                    className={`nav-link ${openSubmenu === 'consumos' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('consumos')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Consumos
                                </div>
                                {openSubmenu === 'consumos' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/registroConsumo"
                                            >
                                                Agrega tus consumos
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/misConsumos"
                                            >
                                                Mis consumos
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/consumos/actualizarConsumos"
                                            >
                                                Actualizar consumos
                                            </NavLink>
                                        </li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "nav-link active" : "nav-link"
                                    }
                                    to="/profile"
                                >
                                    Perfil
                                </NavLink>
                            </li>
                            {userRole === 'ADMIN' && (
                                <>
                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'countries' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('countries')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Paises
                                    </div>
                                    {openSubmenu === 'countries' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/createCountry"
                                                >
                                                    Agregar pais
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/updateCountry"
                                                >
                                                    Actualizar Pais
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/countries/getCountries"
                                                >
                                                    Ver Paises
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'renewableEnergyConsumption' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('renewableEnergyConsumption')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Consumo energia renovable
                                    </div>
                                    {openSubmenu === 'renewableEnergyConsumption' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/createRenewableEnergyConsumption"
                                                >
                                                    Agregar consumo
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/updateRenewableEnergyConsumption"
                                                >
                                                    Actualizar consumo
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyConsumption/getRenewableEnergyConsumption"
                                                >
                                                    Ver consumos
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>

                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'renewableEnergyProduction' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('renewableEnergyProduction')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Produccion energia renovable
                                    </div>
                                    {openSubmenu === 'renewableEnergyProduction' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/createRenewableEnergyProduction"
                                                >
                                                    Agregar produccion
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/updateRenewableEnergyProduction"
                                                >
                                                    Actualizar produccion
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/renewableEnergyProduction/getRenewableEnergyProduction"
                                                >
                                                    Ver produccion
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li className="nav-item">
                                    <div
                                        className={`nav-link ${openSubmenu === 'energyIndicator' ? 'active' : ''}`}
                                        onClick={() => toggleSubmenu('energyIndicator')}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        Indicador de energia
                                    </div>
                                    {openSubmenu === 'energyIndicator' && (
                                        <ul className="submenu ps-3">
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/createEnergyIndicator"
                                                >
                                                    Agregar indicador
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/updateEnergyIndicator"
                                                >
                                                    Actualizar indicador
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    className={({ isActive }) =>
                                                        isActive ? "nav-link active" : "nav-link"
                                                    }
                                                    to="/energyIndicator/getEnergyIndicator"
                                                >
                                                    Ver indicadores
                                                </NavLink>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                </>
                            )}
                            <li className="nav-item logout-item">
                                <button
                                    className="nav-link logout-btn"
                                    onClick={() => setShowLogoutModal(true)}
                                >
                                    <i className="bi bi-box-arrow-right me-2"></i>
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ValidationLogOut
                show={showLogoutModal}
                onHide={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
            />
        </div>
    );
}