import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    container: {
        width: "100%",
        textAlign: "left",
        flexBasis: "100%",
        display: "flex",
        marginBottom: "20px",
            
        [breakpoints.up("md")]: {
            flexBasis: "68%"
        },
    },
    messageContainer: {
        width: "100%",
        textAlign: "center",
        flexBasis: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "20px",
        height: "200px",
        justifyContent: "center",
        alignItems: "center"

    },
    table: {
        width: "100%",
        margin: "auto",
        borderRadius: "2px",
        boxShadow: "1px 1px 10px 3px #00000060"
    },
    tableName: {
        backgroundColor: palette.secondary.dark,
        textAlign: 'center',
        padding: '10px',
        borderRadius: '2px',
        color: "#fff"
    },
    row: {
        backgroundColor: "#404010"
    },
    button: {
        backgroundColor: palette.secondary.light,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        padding: "10px 50px",
        marginTop: "10px"
    },
    submitButton: {
        margin: "10px auto",
        backgroundColor: palette.secondary.main,
        width: "100%",
        color: "#fff",
        padding: "10px",

        "&:hover": {
            color: "#000"
        }
    }
}));