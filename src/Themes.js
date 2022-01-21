import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        purpley: {
            main: '#7400B8',
            contrastText: '#FFFFFF'
        },
        greeny: {
            main:'#80FFDB',
            contrastText: '#5E60CE'

        },
        lilacy: {
            main:'#5E60CE'
        },
        bluey: {
            main:'#48BFE3'
        },
        whitey: {
            main:'#FFFFFF'
        },
        blacky: {
            main:'#000000'
        },
    },
});

export default theme;
