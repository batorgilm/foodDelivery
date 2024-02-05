import { Typography } from "@mui/material";

function FooterMenu(props: any) {
    return (
      <Typography
        style={{
          fontFamily: "arial",
          fontSize: "16px",
          fontWeight: "590",
          textDecorationLine: 'underline',
          margin: 0,
          color: 'white',
        }}
      >
        {props.name}
      </Typography>
    );
  }
  
  export default FooterMenu;
  