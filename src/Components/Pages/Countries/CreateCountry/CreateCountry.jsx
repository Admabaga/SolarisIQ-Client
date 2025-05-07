import './CreateCountry.css'
import { NavBarLogged } from '../../../Common/Navs/NavBarLogged/NavBarLogged'
import Footer from '../../../Common/Footer/Footer'
import ApiClient from '../../../../Utils/ApiClient/ApiClient'
import { Flag } from 'react-bootstrap-icons'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function CreateCountry() {
    const [country, setCountry] = useState('')
    const [search, setSearch] = useState(false)

    const createCountry = async (e) => {
        e.preventDefault()
        setSearch(true)
        try {
            await ApiClient.post('/countries', {
                name: country
            })
            toast.success("¡País agregado correctamente!")
            setCountry('') 
        } catch (error) {
            toast.error("Error: " + error.message)
        } finally {
            setSearch(false)
        }
    }

    return (
        <>
            <div className="profile-app-container">
                <NavBarLogged />
                <div className="profile-content-container">
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="consumptions-title my-5">Agrega un país</h3>

                                <form className="p-5 border rounded shadow" onSubmit={createCountry}>
                                    <div className="mb-3">
                                        <label className="form-label">Nombre:</label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <Flag />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-outline-secondary my-3 w-100 btnAdmin"
                                        disabled={search}
                                    >
                                        {search ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    role="status"
                                                    aria-hidden="true"
                                                ></span>
                                                Enviando...
                                            </>
                                        ) : (
                                            'Agregar'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
