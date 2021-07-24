import { makeStyles } from "@material-ui/core";

export default makeStyles(({ palette, breakpoints }) => ({
    container: {
        width: "100%",
        textAlign: "left",
        flexBasis: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
            
        [breakpoints.up("md")]: {
            flexBasis: "28%",
        },
    },
    tableContainer: {
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
    table: {
        width: "100%",
        tableLayout: "fixed"
    },
    tableRow: {
        backgroundColor: "#fff",
    },
    tableHeadRow: {
        backgroundColor: palette.secondary.light,
        fontWeight: "bolder",
    },
    button: {
        width: "100%",
        marginTop: "10px",
        padding: "10px",
        backgroundColor: palette.secondary.dark,
        color: "#fff",

        "&:hover": {
            backgroundColor: palette.secondary.main
        }
    }
}));