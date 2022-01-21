import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Stack} from "@mui/material";
import NewPostButton from "./NewPostButton";


const UserProfileWritePost = () => {

    const [newPost, setNewPost] = useState(null)
    const handleNewPost = (e) => {
        //any validation checks here
        setNewPost(e.target.value)
    }
    const handleSubmit = (e) => {
        console.log('A new post was created: '  + newPost);
        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Stack spacing={3} alignItems='center' justifyContent='center' flexDirection='row' sx={{mb: 2}}>
                    <TextField type="text" value={newPost} onChange={handleNewPost} id="outlined-textarea" label="NewPost"
                               multiline sx={{bgcolor: 'whitey.main', borderRadius: '10px', width: '40vw'}}/>
                    <NewPostButton/>
                </Stack>
            </form>
        </>
    );
}
export default UserProfileWritePost