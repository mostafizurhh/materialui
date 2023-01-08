import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#111430',
            yellow: '#FBD062',
            green: '#6b8f55'
        },
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: 'xl'
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    padding: '0.6rem 2.5rem'
                },
            },
            defaultProps: {
                variant: 'contained',
                color: 'primary'
            },
        },
    },
});