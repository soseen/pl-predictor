import { makeStyles } from "@material-ui/core";

export default makeStyles(({ palette, breakpoints }) => ({
    dialogMain: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "20px",
        alignItems: "center",
        padding: "5px",
        backgroundColor: palette.secondary.main,
        color: "#fff",
        boxSizing: "border-box",

        [breakpoints.up("md")]: {
            minWidth: "400px"
        },
    },
    username: {
        width: "100%",
        padding: "10px",
        borderRadius: "2px",
        backgroundColor: palette.secondary.dark,
        textAlign: "center",
        boxSizing: "border-box"
    },
    title: {
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#000",
    },
    userPredictions: {
        width: "100%",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    tableContainer: {
        width: "100%",
        maxHeight: "600px",
        overflowY: "auto",
    },
    table: {
        width: "100%",
        margin: "auto",
        marginBottom: "20px",
        borderRadius: "2px",
        backgroundColor: palette.secondary.light
    },
    scoreWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    row: {
        width: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 10px",
        backgroundColor: "#ffffff",
        position: 'relative',
        borderRadius: "2px",
        borderBottom: `1px solid #e0e0e0`,
        boxSizing: "border-box",

        "&:hover": {
            "& $deletePredictionButton": {
                display: "block"
            }
        },

        [breakpoints.down("md")]: {
            padding: "2px"
        },
    },
    rowBoosted: {
        backgroundColor: palette.secondary.dark,
        borderBottom: `1px solid ${palette.secondary.main}`,
    },
    teamName: {
        padding: "10px",
        flex: 1,
        color: "#000",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",

        "& > :nth-child(2)": {
            textAlign: "right",
            backgroundColor: "red"
        },

        [breakpoints.down("md")]: {
            fontSize: "0.7rem",
            padding: "8px 5px"
        },
    },
    name: {
        [breakpoints.down("md")]: {
            fontSize: "0.75rem",
        },
    },
    crest: {
        width: "15px",
        height: "15px",
        objectFit: "contain",
        background: "none",
        // border: `1px solid ${palette.secondary.main}`,
        // padding: '2px',
        strokeOpacity: 0,
        fill: "none",
        fillOpacity: 0.5,
        display: "none",

        "&: > svg": {
            strokeOpacity: 0,
            fill: "none",
            fillOpacity: 0.5
        },
        [breakpoints.up("md")]: {
            display: "block",
            width: "25px",
            height: "25px"
        }
    },
    score: {
        outline: 'none',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e0e0e0",
        width: "20px",
        height: "20px",
        border: 'none',
        borderRadius: "2px",
        margin: "0 5px",
        textAlign: "center",
        cursor: "pointer",
        color: "#000",

        [breakpoints.up("md")]: {
            fontSize: "1rem",
            width: "30px",
            height: "30px",
          }
    },
    exactScore: {
        backgroundColor: "#39a350"
    },
    correctScore: {
        backgroundColor: "#3c87b5"
    },
    incorrectScore: {
        backgroundColor: "#c74c4c"
    },
    span: {
        color: "#000"
    },
    points: {
        padding: "5px",
        borderRadius: "2px",
        backgroundColor: palette.secondary.dark,
        color: "#fff"
    },
    deletePredictionButton: {
        display: "none",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: palette.secondary.light,
        textTransform: 'capitalize',
        fontWeight: 'bold',
        padding: "5px 25px",

        "&:hover": {
            backgroundColor: palette.secondary.main,
        }
    }
}))