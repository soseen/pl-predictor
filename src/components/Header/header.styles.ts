import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    header: {
        boxSizing: 'border-box',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        color: "#fff",
        zIndex: 100,
      },
    navigation: {
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#00000099",
        borderBottom: `3px solid ${palette.secondary.dark}`,

        [breakpoints.down("md")]: {
            padding: '10px',
        },
    },
    navigationFilled: {
        backgroundColor: "#202020"
    },
    loader: {
        position: "fixed",
        zIndex: 500,
        top: "80px",
        width: "100%",
    },
    title: {
        marginBottom: 0,
        marginTop: 0,
        fontSize: "1.125rem",
        marginRight: "auto",

        [breakpoints.down("md")]: {
            fontSize: '0.9rem',
        },
    },
    username: {
        marginRight: "10px",

        [breakpoints.down("md")]: {
            display: "none"
        },
        
    },
    button: {
        backgroundColor: palette.secondary.main,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginRight: "5px",

        [breakpoints.down("md")]: {
            fontSize: '0.7rem',
            padding: "5px 10px",
        },
    }
}));