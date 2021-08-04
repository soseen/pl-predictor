import { makeStyles } from '@material-ui/core'

export default makeStyles(({ spacing, palette, breakpoints }) => ({
    header: {
        padding: '20px',
        boxSizing: 'border-box',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        borderBottom: `3px solid ${palette.secondary.dark}`,
        top: 0,
        left: 0,
        backgroundColor: "#1a1a1a",
        color: "#fff",
        zIndex: 100,
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