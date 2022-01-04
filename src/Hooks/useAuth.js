import { useState, useContext, createContext } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const authContext = createContext({});

// Provider component that wraps the app and makes auth object ...
// ... available to any child component that calls useAuth().
export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);
    const navigate = useNavigate();

    const signup = (username, bio, email, password) => {
        if (username === '' || email === '' || password === '') return;
        axios.post(`http://localhost:8000/signUp`, {
            username: username,
            bio: bio,
            email: email,
            password: password
        }).then(response => {
            if (response.data.success) {
                return setUser(response.data.data);
            }
        })
    };

    const signin = async (email, password) => {
        if (email === '' || password === '') return;
        let response = await axios.post(`http://localhost:8000/login`, {
                email: email,
                password: password
        }).then(response => {
            if (response.data.success) {
                setUser(response.data.data)
               return response.data.data
            } else {
                navigate('/login')
            }
        }).then( async (user) => {
            return await axios.get(`http://localhost:8000/myProfile`, {
                headers: { Authorization: `Bearer ${user.access_token}` }
            }).then(response => {
                if(response.data.success) {
                    console.log("setting posts", response.data.posts)
                    setPosts(response.data.posts)
                }
            }).then(() => {
                    navigate('/myProfile')
                }
            )
        })
    };

    const signout = () => {
         setUser(null);
         navigate('/')
    };

    return {
        user,
        posts,
        signup,
        signin,
        signout,
    };
}