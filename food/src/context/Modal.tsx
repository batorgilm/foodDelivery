import { Typography } from "@mui/material";

function ModalText(props: any) {
  return (
    <Typography
      style={{
        fontFamily: "arial",
        fontSize: "16px",
        fontWeight: "100",
        padding: "8px 0",
        margin: 0,
   
      }}
    >
      {props.name}
    </Typography>
  );
}

export default ModalText;
