import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    modal: {
        width: "100%",
        backgroundColor: palette.secondary.dark,
        border: `1px solid ${palette.secondary.main}`,
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        boxShadow: "1px 1px 15px 3px #00000060",

        [breakpoints.up("md")]: {
            minWidth: "400px"
        }
    },
    modalContent: {
        padding: "20px",
        width: "80%",
        color: "white",
        textAlign: "center"
    },
    validationMessage: {
        color: palette.secondary.contrastText,
        margin: "10px 0"
    },
    inputContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        textAlign: "left"
    },
    input: {
        outline: "none",
        borderRadius: "2px",
        border: "none",
        padding: "5px",
        marginTop: "5px",
        backgroundColor: palette.secondary.main,
        color: "#fff",
        fontSize: "1.1rem",
        "&:focus": {
            backgroundColor: palette.secondary.light
        }
    },
    button: {
        backgroundColor: "#fff",
        marginTop: "45px",
        width: "100%",
        "&:hover": {
            backgroundColor: "#e0e0e0"
        }
    }
}));