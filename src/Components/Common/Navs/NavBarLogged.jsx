import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Images/SolairsIconLight.png'
import { ValidationLogOut } from '../ValidationLogOut/ValidationLogOut';
import './Navs.css';
import './VerticalNav.css';

export function NavBarLogged() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const navigate = useNavigate();
    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };

    const handleLogout = () => {
        navigate('/', { replace: true });
        window.location.reload();
    };

    return (
        <div className="navbar-vertical-container">
            <nav className="navbar navbar-dark navbar-vertical">
                <div className="container-fluid flex-column align-items-start">
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        margin: '0 auto 1rem'
                    }}>
                        <img
                            src={Logo}
                            alt="Solaris IQ Logo"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                    <a className="navbar-brand mb-4" href="/lobby">Solaris IQ</a>
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
                                to="/contacto"
                            >
                                Contacto
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
            </nav>
            <ValidationLogOut
                show={showLogoutModal}
                onHide={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
            />
        </div>
    );
}