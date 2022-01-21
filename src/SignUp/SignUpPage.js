import Container from '@mui/material/Container';
import {ThemeProvider} from "@mui/material";
import theme from "../Themes";
import SignUpTitle from "./SignUpTitle";
import SignUpForm from "./SignUpForm";

function SignInPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: 2,
                mx: 'auto',
                bgcolor: 'lilacy.main',
                color: 'greeny.main',
                height: '100vh',
                width: '100vw',
                fontSize:' 3rem',
                m: 1,
                borderRadius: 1,
                textAlign: 'center',
                justifyContent: 'center',

            }}>
                <SignUpTitle />
                <SignUpForm />
            </Container>
        </ThemeProvider>
    )
}

export default SignInPage;