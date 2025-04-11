import React, { useState, useRef } from 'react';
import './ValidationRegisterCode.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const ValidationRegisterCode = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);
            setError('');
            if (value && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const sendCode = async () => {
        const fullCode = code.join('');

        if (fullCode.length !== 6) {
            setError('Por favor ingrese todos los dígitos del código.');
            return;
        }

        setIsLoading(true);
        try {
            const response = await axios.post('http://localhost:8080/users/validateCodes', fullCode, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            toast.success('Usuario registrado exitosamente!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            onClose();
        } catch (error) {
            console.error("Error validating code:", error);
            setError('Ocurrió un error al validar el código');
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="modal-backdrop show d-flex align-items-center justify-content-center" style={{ zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content p-4 text-center">
                    {children}
                    <div className="mt-3">
                        <h4 className="mb-4">Ingrese su código de verificación</h4>
                        <div className="d-flex justify-content-center mb-3">
                            {code.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    className="code-input mx-1 text-center"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    maxLength="1"
                                    disabled={isLoading}
                                />
                            ))}
                        </div>

                        {error && <div className="text-danger ">{error}</div>}

                        <div className="d-flex justify-content-center">
                            <button
                                className="btn btn-outline-secondary mx-2"
                                onClick={sendCode}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Validando...' : 'Validar'}
                            </button>
                            <button
                                className="btn btn-outline-secondary mx-2"
                                onClick={onClose}
                                disabled={isLoading}
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValidationRegisterCode;