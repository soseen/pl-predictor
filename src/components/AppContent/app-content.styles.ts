import { makeStyles } from '@material-ui/core'

export default makeStyles(({ palette, breakpoints }) => ({
    container: {
        width: "100%",
        marginTop: "52px",
        padding: "15px",
        boxSizing: "border-box",
        boxShadow: "2px 2px 10px 5px #00000090",
        backgroundColor: "#2a2a2a",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        [breakpoints.up("md")]: {
            margin: '20px auto',
            marginTop: "90px",
            maxWidth: "1200px",
        },
    },
    error: {
        margin: "auto",
        padding: "20px",
        backgroundColor: palette.secondary.dark,
        borderRadius: "2px",
        boxShadow: "2px 2px 15px 5px #00000060"
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
        marginBlockEnd: 0,
        paddingInlineStart: 0
    },
    rule: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
        flexShrink: 0,
        
        "&::before": {
            content: "''",
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            marginRight: "8px",
            flexShrink: 0,
            backgroundColor: palette.secondary.main
        }
    },
    ruleText: {
        display: "flex",
        alignItems: "center",

        [breakpoints.down("md")]: {
            display: "inline-block"
        },
    },
    accent: {
        color: palette.secondary.main
    },
    accentGreen: {
        backgroundColor: "#39a350",
        padding: "2px",
        borderRadius: "2px",
    },
    accentBlue: {
        backgroundColor: "#3c87b5",
        padding: "2px",
        borderRadius: "2px",
    }
}));