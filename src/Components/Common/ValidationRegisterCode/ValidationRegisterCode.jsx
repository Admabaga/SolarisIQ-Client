import React, { useState, useRef, useEffect } from 'react';
import './ValidationRegisterCode.css';
import ApiClient from '../../../Utils/ApiClient/ApiClient';
import toast from 'react-hot-toast';

const ValidationRegisterCode = ({ isOpen, onClose, children, userData }) => {
    const [code, setCode] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const inputRefs = useRef([]);
    const [smsTimer, setSmsTimer] = useState(30);
    const [emailTimer, setEmailTimer] = useState(30);

    useEffect(() => {
        if (isOpen) {
            setSmsTimer(30);
            setEmailTimer(30);
            setCode(['', '', '', '', '', '']);
            setError('');
        }
    }, [isOpen]);

    useEffect(() => {
        const interval = smsTimer > 0 ? setInterval(() => setSmsTimer((prev) => prev - 1), 1000) : null;
        return () => clearInterval(interval);
    }, [smsTimer]);

    useEffect(() => {
        const interval = emailTimer > 0 ? setInterval(() => setEmailTimer((prev) => prev - 1), 1000) : null;
        return () => clearInterval(interval);
    }, [emailTimer]);

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
            const response = await ApiClient.post(
                '/users/validateCodes',
                fullCode,
            );
            toast.success('¡Usuario registrado con exito!', {
                duration: 3000,
            });

        } catch (error) {
            console.error('Error validating code:', error);
            setError('Ocurrió un error al validar el código');
        } finally {
            setIsLoading(false);
        }
    };

    const handleResendSMS = async () => {
        if (smsTimer === 0) {
            try {
                const response = await ApiClient.post('/sendSms', userData);
                setSmsTimer(30);
                toast.success('SMS enviado exitosamente!');
            } catch (error) {
                toast.error('No se pudo enviar el sms.');
            }
        }
    };

    const handleResendEmail = async () => {
        if (emailTimer === 0) {
            try {
                const response = await ApiClient.post('/sendMails', userData);
                setEmailTimer(30);
                toast.success('Correo enviado exitosamente!');
            } catch (error) {
                toast.error('No se pudo enviar el correo.');
            }
        }
    };

    if (!isOpen) return null;
    return (
        <div className="modal-backdrop show" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="modal-wrapper" style={{
                position: 'relative',
                maxWidth: '500px',
                width: '100%',
                margin: '0 20px'
            }}>
                <button
                    className="close-button"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    &times;
                </button>
                <div className="modal-dialog">
                    <div className="modal-content p-4 text-center">
                        {children}
                        <div className="mt-3">
                            <h4 className="mb-4 text-white">Ingrese su código de verificación</h4>
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
                            {error && <div className="text-danger">{error}</div>}
                            <div className="d-flex justify-content-center">
                                <button
                                    className="btn btn-outline-secondary mx-2"
                                    onClick={sendCode}
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Validando...' : 'Validar'}
                                </button>
                            </div>
                            <div className="d-flex justify-content-center mt-3 flex-column align-items-center">
                                <button
                                    className="btn btn-primary mb-2"
                                    onClick={handleResendEmail}
                                    disabled={emailTimer > 0}
                                >
                                    {emailTimer > 0 ? `Reenviar a email (${emailTimer}s)` : 'Reenviar a email'}
                                </button>
                                <button
                                    className="btn btn-success"
                                    onClick={handleResendSMS}
                                    disabled={smsTimer > 0}
                                >
                                    {smsTimer > 0 ? `Reenviar SMS (${smsTimer}s)` : 'Reenviar a SMS'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValidationRegisterCode;

