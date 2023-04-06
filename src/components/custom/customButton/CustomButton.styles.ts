import { Theme } from "@mui/system";

const buttonStyles = (theme: Theme) => ({
  btn: {
    '&.MuiButtonBase-root': {
      padding: "17px 40px",
      borderRadius: "30px",    
      color: "#9C9C9B",
      backgroundColor: "#E1E3E6",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "100%",
      letterSpacing: "normal",
      textTransform: 'none',
    },
  },
});

export default buttonStyles;
