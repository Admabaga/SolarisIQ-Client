import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

export default function getUserRoleFromToken() {
  const token = Cookies.get('jwt')

  if (!token) {
    console.warn('No se encontró la cookie JWT')
    return null
  }

  try {
    const decoded = jwtDecode(token)
    console.log("Token decodificado:", decoded)

    return decoded.role || null
  } catch (error) {
    console.error('Error al decodificar el token:', error)
    return null
  }
}
