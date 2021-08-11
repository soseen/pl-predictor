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
        borderRadius: "2px"
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
        marginTop: "10px",
        backgroundColor: palette.secondary.dark,
        width: "100%",
        color: "#fff",
        padding: "10px",

        "&:hover": {
            backgroundColor: palette.secondary.main
        },
    },
    label: {
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "8px",
        fontSize: "0.8rem",
        flexWrap: "nowrap"
    },
    accent: {
        color: palette.secondary.main,
    },
    formControl: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "10px 0",
        padding: "5px",

        [breakpoints.up("sm")]: {
            display: "none"
        },
    },
    select: {
        color: "#000",
        backgroundColor: palette.secondary.main,
        padding: "5px",
        borderRadius: "2px",
        fontSize: "0.8rem"
    },
    customSelectMenu: {
        backgroundColor: palette.secondary.main
    }
}));