import Container from "@mui/material/Container";

function UserPostConstruction ({content}){
    return (<Container sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 2,
        mx: 'auto',
        bgcolor: 'bluey.main',
        color: 'blacky.main',
        height: '20vh',
        width: '60vw',
        fontSize:' 1rem',
        m: 4,
        borderRadius: 5,
        textAlign: 'center',
        justifyContent: 'center',
    }}>
    <div>{content}</div>
</Container>)
}
export default UserPostConstruction