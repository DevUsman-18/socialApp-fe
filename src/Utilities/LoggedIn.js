import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from "../Hooks/useAuth";

const LoggedIn = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();
    console.log("logged in", auth)

    if (!auth.user) {
        return <Navigate to="/" state={{ from: location }} />;
    }

    return children;
}

export default LoggedIn