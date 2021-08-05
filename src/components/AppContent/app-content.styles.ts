import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    container: {
        width: "100%",
        marginTop: "120px",
        padding: "15px",
        boxSizing: "border-box",
        boxShadow: "1px 1px 15px 3px #00000060",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-start",
        flexWrap: "wrap",

        [breakpoints.up("md")]: {
            margin: '20px auto',
            marginTop: "120px",
            maxWidth: "1200px",
            backgroundColor: "#2a2a2a",
        },
    }
}));