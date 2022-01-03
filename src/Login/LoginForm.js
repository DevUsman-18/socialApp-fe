import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import GoToProfile from "./GoToProfile";
import {useAuth} from "../Hooks/useAuth";
import {useNavigate} from "react-router-dom";
import FormHelperText from "@mui/material/FormHelperText";
import axios from "axios";


const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const auth = useAuth()
    const navigate = useNavigate();

    function ValidateEmail(mail)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
        return (false)
    }

    function htmlEntities(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    const handleEmailChange = (e) => {
        //any validation checks here
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        //any validation checks here
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        console.log('A email was submitted: '  + password + email);
        e.preventDefault();
        if (!ValidateEmail(email) || email.length === 0){
            document.getElementById("error").textContent = 'Password or email not recognized'
        } else {
            document.getElementById("error").textContent = ''
            setEmail(email)
        }
        if (password.length < 8 || password.length === 0 ){
            document.getElementById("error").textContent = 'Password or email not recognized'
        } else {
            document.getElementById("error").textContent = ''
            setPassword(htmlEntities(password))
        }
        let userId = auth.signin(email, password)

        // let profileResponse = await axios.get(`http://localhost:8000/myProfile`, {
        //     id: userId
        // }).then(response => {
        //     console.log(response)
        // })
        // navigate('/myProfile')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={4} alignItems='center' justifyContent='center' sx={{mb: 2}} >
                <TextField type="text" value={email} onChange={handleEmailChange} id="filled-basic" label="Email"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                <TextField type="text" value={password} onChange={handlePasswordChange} id="filled-basic" label="Password"
                           variant="filled" sx={{bgcolor: 'whitey.main', borderRadius: '4px', width: '50vw'}} />
                    <FormHelperText id="error"></FormHelperText>
                </Stack>
                <Stack direction="row" spacing={4} justifyContent='center' sx={{m: 10}}>
                    <GoToProfile/>
                </Stack>
            </form>
        </>
    );
}

export default LoginForm;