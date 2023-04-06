import { Theme } from "@mui/system";

const DrawerWidth = "360px";

const testPageStyle = (theme: Theme) => ({
  root: {},
  rootDrawerOpen: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: DrawerWidth,
    },
  },
  drawer: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: DrawerWidth,
      padding: "24px 32px",
      border: 0,
      backgroundColor: "#0f2e4d5",
      boxShadow: "0px 0px 20px rgba(172, 172, 172, 0.15)",
    },
  },
  content: {
    '&.MuiBox-root': {
      padding: "105px 24px",
      [theme.breakpoints.down("md")]: {
        padding: "88px 40px",
      }
    }
  },
  drawerTitle: {
    "&.MuiTypography-root": {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "23.4px",
      letterSpacing: -1,
    },
  },
  drawerProgressBox: {
    height: "30px",
  },
  drawerProgressBar: {
    width: "258px",
    height: "8px",
    backgroundColor: "#F6F6F6",
    borderRadius: "110px",
  },
  drawerProgressBarText: {
    "&.MuiTypography-root": {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "100%",
    },
  },
  quizBox: {
    height: "50px",
  },
  quizText: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "150%",
      letterSpacing: "-0.015em",
    },
  },

  quizTitle: {
    height: "34px",
    "&.MuiTypography-root": {
      marginBottom: "8px",
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "120%",
      letterSpacing: "0.0025em",
    },
  },
  quizDescription: {
    height: "27px",
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "170%",
      letterSpacing: "-0.015em",
    },
  },
  progressBarBox: {
    height: "21px",
  },
  progressBarText: {
    "&.MuiTypography-root": {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "150%",
      letterSpacing: "0.01em",
    },
  },
  questionNo: {
    "&.MuiTypography-root": {
      fontSize: "22px",
      fontWeight: "700",
      lineHeight: "130%",
      letterSpacing: "-0.01em",
    },
  },
  questionText: {
    "&.MuiTypography-root": {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "27px",
      letterSpacing: "-0.015em",
    },
  },
  answerBox: {
    marginBottom: "8px",
    padding: "15px",
    borderRadius: "16px",
    backgroundColor: "#FBFBFC",
  },
  answerText: {
    "&.MuiTypography-root": {
      height: "27px",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "170%",
      letterSpacing: "-0.015em",
    },
  },
});

export default testPageStyle;
