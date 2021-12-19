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
    titleContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: palette.secondary.light,
        padding: '10px',
    },
    gameweekSelect: {
        color: "#202020",
        fontSize: 14
    },
    tableButtons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    changeGameweekButton: {
        fontSize: 30,
        padding: 5,
        backgroundColor: palette.secondary.dark,
        color: "#fff",
        marginLeft: 5,
        minWidth: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& svg": {
            width: "0.8em",
            height: "0.8em"
        },
        "&:hover": {
            backgroundColor: palette.secondary.main
        },
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

        [breakpoints.up("sm")]: {
            display: "none"
        },
    },
    select: {
        color: "#000",
        backgroundColor: palette.secondary.main,
        padding: "5px",
        borderRadius: "2px",
        fontSize: "0.8rem",
        minWidth: 150
    },
    customSelectMenu: {
        backgroundColor: palette.secondary.main
    }
}));