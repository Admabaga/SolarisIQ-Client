import React, { useState } from 'react';
import './ValidationRegisterCode.css'
import axios from 'axios';
const ValidationRegisterCode = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    const [code, setCode] = useState('');

    const sendCode = async () => {
        try {
            const response = await axios.post('http://localhost:8080/users/validateCodes', code, {
                headers: {
                  'Content-Type': 'application/json',
                },
              });
            console.log(response.data)
            onClose
        } catch (error) {
            console.log("error")
        }
    }


    return (
        <div className="modal-backdrop show d-flex align-items-center justify-content-center" style={{ zIndex: 1050 }}>
            <div className="modal-dialog">
                <div className="modal-content p-4">
                    {children}
                    <div className="text-end mt-3">
                        <input type="text"
                            value={code}
                            onChange={(code) => setCode(code.target.value)}
                        />
                        <br /><br />
                        <button className="btn btn-outline-secondary mx-3" onClick={sendCode}>
                            Validar
                        </button>
                        <button className="btn btn-outline-secondary mx-3" onClick={onClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ValidationRegisterCode;