import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export const RouteProtector = ({ children }) => {
    const [cookies] = useCookies(['session_token']);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const isAuthPage = ['/lobby'].includes(location.pathname);
        if (!cookies.session_token && !isAuthPage) {
            navigate('/', { replace: true });
        } else if (cookies.session_token && isAuthPage) {
            navigate('/lobby', { replace: true });
        }
    }, [location, navigate, cookies.session_token]);

    return children;
};