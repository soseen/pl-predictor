import { makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, breakpoints }) => ({
    row: {
        width: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#ffffff",
        position: 'relative',
        borderBottom: `1px solid #e0e0e0`,
    },
    rowSubmitted: {
        backgroundColor: palette.secondary.light,
    },
    rowExactScore: {
        backgroundColor: "#39a350"
    },
    rowCorrectScore: {
        backgroundColor: "#3c87b5"
    },
    rowIncorrectScore: {
        backgroundColor: "#c74c4c"
    },
    bonusButton: {
        textTransform: "capitalize",
        marginRight: "5px",
        backgroundColor: "#4f4f4f",
        color: "#fff",
        padding: "2px",
        borderRadius: "50%",
        boxShadow: "1px 1px 5px 1px #00000060",
        minWidth: "0",
        fontSize: "0.8rem",

        "&:hover": {
            backgroundColor: palette.secondary.dark
        },

        [breakpoints.up("md")]: {
            padding: "6px",
            marginRight: "10px",
            fontSize: "1rem"
          }
    },
    bonusButtonPressed: {
        backgroundColor: palette.secondary.main,
    },
    teamName: {
        padding: "10px",
        flex: 1,
        color: "#000",

        "& > :nth-child(2)": {
            textAlign: "right",
            backgroundColor: "red"
        }
    },
    scoreInputs: {
        // marginLeft: "auto",
        // marginRight: "auto"
    },
    scoreInput: {
        outline: 'none',
        backgroundColor: "#e0e0e0",
        width: "25px",
        height: "25px",
        border: 'none',
        borderRadius: "2px",
        margin: "0 5px",
        textAlign: "center",
        fontSize: "1rem",
        cursor: "pointer",

        [breakpoints.up("md")]: {
            fontSize: "1.2rem",
            width: "40px",
            height: "40px",
          }
    },
    span: {
        color: "#000"
    },
    crest: {
        width: "20px",
        height: "20px",
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
            width: "30px",
            height: "30px"
        }
    }
}));