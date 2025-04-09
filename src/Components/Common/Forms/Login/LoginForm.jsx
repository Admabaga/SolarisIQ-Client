import { useState } from "react"
import axios from 'axios'
import { EnvelopeFill, LockFill, Eye, EyeSlash } from 'react-bootstrap-icons'
import './LoginForm.css'
export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [search, setSearch] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [respuestaServer, setRespuestaServer] = useState("")
    const [respuestaServerError, setRespuestaServerError] = useState(false)

    async function procesarFormulario(evento) {
        evento.preventDefault()
        setSearch(true)
        try {
            const response = await axios.post('http://localhost:8080/users/logins',
                {
                    email,
                    password,
                })
            setRespuestaServer("Valida tu registro!")
            setRespuestaServerError(false)
            console.log(response.data)
        } catch (error) {
            const mensajeError = error.response?.data?.message || error.message || "Ocurrió un error inesperado"
            setRespuestaServer(`Error al enviar datos: ${mensajeError}`);
            setRespuestaServerError(true)

        } finally {
            setSearch(false)
        }

    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center mb-4">Inicio sesión</h3>
                        <form className="p-5 border rounded shadow" onSubmit={procesarFormulario}>
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
                                <label className="form-label">Contraseña:</label>
                                <div className="input-group">
                                    <span className="input-group-text">
                                        <LockFill />
                                    </span>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{
                                            borderTopRightRadius: '0 !important',
                                            borderBottomRightRadius: '0 !important'
                                        }}
                                        required
                                    />
                                    <span className="input-group-text p-0">
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="btn-eye"
                                        >
                                            {showPassword ? <EyeSlash /> : <Eye />}
                                        </button>
                                    </span>
                                </div>
                            </div>

                            <button type="submit" className="btn btn-outline-secondary my-3 w-100">
                                Ingresar
                            </button>

                            {search ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border"></div>
                                    <span className="m-1">Verificando...</span>
                                </div>
                            ) : (
                                respuestaServer && (
                                    <p className={`respuestaServer ${respuestaServerError ? 'error' : 'success'}`}>
                                        {respuestaServer}
                                    </p>
                                )
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}