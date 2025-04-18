import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../../Images/SolairsIconLight.png';
import { ValidationLogOut } from '../../ValidationLogOut/ValidationLogOut.jsx';
import '../NavBarNotLogged/Navs.css';
import './VerticalNav.css';

export function NavBarLogged() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    
    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const handleLogout = () => {
        navigate('/', { replace: true });
        window.location.reload();
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="navbar-vertical-container">
            <nav className="navbar navbar-dark navbar-vertical">
                <div className="container-fluid flex-column align-items-start">
                    {/* Header para móvil y tablet (hasta 987px) */}
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

                    {/* Logo y marca para desktop (solo visible arriba de 987px) */}
                    <div className="d-none d-lg-flex flex-column align-items-center w-100 desktop-header">
                        <div className="desktop-logo">
                            <img src={Logo} alt="Solaris IQ Logo" />
                        </div>
                        <a className="navbar-brand mb-4" href="/lobby">Solaris IQ</a>
                    </div>

                    {/* Menú principal - versión móvil/tablet (hasta 987px) */}
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
                                    className={`nav-link ${openSubmenu === 'servicios' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('servicios')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Servicios
                                </div>
                                {openSubmenu === 'servicios' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/instalacion"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Instalación
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/mantenimiento"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Mantenimiento
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/diagnostico"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                Diagnóstico
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

                    {/* Menú para desktop (solo visible arriba de 987px) */}
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
                                    className={`nav-link ${openSubmenu === 'servicios' ? 'active' : ''}`}
                                    onClick={() => toggleSubmenu('servicios')}
                                    style={{ cursor: 'pointer' }}
                                >
                                    Servicios
                                </div>
                                {openSubmenu === 'servicios' && (
                                    <ul className="submenu ps-3">
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/instalacion"
                                            >
                                                Instalación
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/mantenimiento"
                                            >
                                                Mantenimiento
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                className={({ isActive }) =>
                                                    isActive ? "nav-link active" : "nav-link"
                                                }
                                                to="/servicios/diagnostico"
                                            >
                                                Diagnóstico
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
                                >
                                    Profile
                                </NavLink>
                            </li>
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