import { useState } from "react";
import axios from 'axios';
import './RegisterForm.css';
import { EnvelopeFill, PersonFill, TelephoneFill, LockFill } from 'react-bootstrap-icons';
import ValidationRegisterCode from "../../ValidationRegisterCode/ValidationRegisterCode";

export default function RegisterForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [search, setSearch] = useState(false);
    const [rol] = useState("USER");
    const [respuestaServer, setRespuestaServer] = useState("");
    const [respuestaServerError, setRespuestaServerError] = useState(false);
    const [showModal, setShowModal] = useState(false);
    let user = {
        name,
        phone,
        email,
        rol,
        password
    }
    async function procesarFormulario(evento) {
        evento.preventDefault();
        setSearch(true);
        try {
            const response = await axios.post('http://localhost:8080/users', {
                name,
                phone,
                email,
                rol,
                password,
            });
            setRespuestaServer("¡Valida tu registro!");
            setRespuestaServerError(false);
            user = response.data
            setShowModal(true);
        } catch (error) {
            const mensajeError = error.response?.data?.message || error.message || "Ocurrió un error inesperado";
            setRespuestaServer(`Error al enviar datos: ${mensajeError}`);
            setRespuestaServerError(true);
        } finally {
            setSearch(false);
        }
    }

    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mb-4">¡Regístrate!</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
                            <div className="mb-3">
                                <label className="form-label">Nombre:</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <PersonFill />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Correo:</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <EnvelopeFill />
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Teléfono:</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <TelephoneFill />
                                    </span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Contraseña:</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <LockFill />
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-outline-secondary my-3 w-100"
                            >
                                Registrarse
                            </button>

                            {search ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status"></div>
                                    <span className="m-1">Enviando...</span>
                                </div>
                            ) : (
                                <>
                                    {respuestaServer && (
                                        <p className={`respuestaServer ${respuestaServerError ? 'error' : 'success'}`}>
                                            {respuestaServer}
                                        </p>
                                    )}
                                </>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <ValidationRegisterCode
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                userData={user}>
            </ValidationRegisterCode>
        </>
    );
}
