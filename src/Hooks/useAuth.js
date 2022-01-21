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
        axios.post(`http://localhost:3306/signUp`, {
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
         await axios.post(`http://localhost:3306/login`, {
                "email": email,
                "password": password
        }).then(response => {
            if (response.data.success) {
                setUser(response.data.data)
               return response.data
            } else {
                navigate('/login')
            }
        }).then( async (user) => {
             console.log("token", user["data"]["access_token"])
            await axios.get(`http://localhost:3306/myProfile`, {
                //header isnt being sent properly or JWT check is not functioning
                headers: { Authorization: `Bearer ${user['access_token']}` }
            }).then(response => {
                console.log("this far")
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