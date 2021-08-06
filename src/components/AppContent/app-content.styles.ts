import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    container: {
        width: "100%",
        marginTop: "120px",
        padding: "15px",
        boxSizing: "border-box",
        boxShadow: "1px 1px 15px 3px #00000060",
        backgroundColor: "#2a2a2a",
        minHeight: "100px",

        [breakpoints.up("md")]: {
            margin: '20px auto',
            marginTop: "120px",
            maxWidth: "1200px",
        },
    },
    mainContent: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
    },
    rulesContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: "#2f2f2f",
        padding: "10px",
        borderRadius: "2px",
    },
    rulesTitle: {
        textAlign: "left"
    },
    rulesList: {
        width: "100%",
        listStyle: "none",
        textAlign: "left",
        marginBlockStart: "10px",
        paddingInlineStart: 0
    },
    rule: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
        
        "&::before": {
            content: "''",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            marginRight: "8px",
            backgroundColor: palette.secondary.main
        }
    },
    ruleText: {
        display: "flex",
        alignItems: "center",


    },
    accent: {
        color: palette.secondary.main,
        margin: "auto"
    }
}));