import { makeStyles } from "@material-ui/core";

export default makeStyles(({ palette, breakpoints }) => ({
    dialogMain: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        backgroundColor: palette.secondary.main,
        color: "#fff",

        [breakpoints.up("md")]: {
            minWidth: "300px"
        },
    },
    title: {
        width: "100%",
        padding: "10px",
        borderRadius: "2px",
        backgroundColor: palette.secondary.dark,
        textAlign: "center",
        boxSizing: "border-box"
    },
    table: {
        width: "100%",
        tableLayout: "fixed"
    },
    tableRow: {
        backgroundColor: "#fff",
        cursor: "pointer",

        "&:hover": {
            backgroundColor: "#e0e0e0"
        }
    },
    tableHeadRow: {
        backgroundColor: palette.secondary.light,
        fontWeight: "bolder",
    },
}))