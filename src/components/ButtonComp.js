import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: lightGreen,
  },
});

function ButtonComp(props) {
  return (
    <>
      <Button
        variant="contained"
        style={{ backgroundColor: lightGreen[500] }}
        endIcon={<SendIcon />}
      >
        {props.label}
      </Button>
    </>
  );
}

export default ButtonComp;
