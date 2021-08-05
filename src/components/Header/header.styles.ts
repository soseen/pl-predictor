import { makeStyles } from '@material-ui/core'

export default makeStyles(({ spacing, palette, breakpoints }) => ({
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
        backgroundColor: "#1a1a1a",
        borderBottom: `3px solid ${palette.secondary.dark}`,
    },
    loader: {
        position: "absolute",
        zIndex: 200,
        top: "90px",
        width: "100%",
    },
    title: {
        marginBottom: 0,
        marginTop: 0,
        fontSize: "1.125rem",
        marginRight: "auto"
    },
    username: {
        marginRight: "10px"
    },
    button: {
        backgroundColor: palette.secondary.light,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        marginRight: "5px",
    }
}));