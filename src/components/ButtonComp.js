import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";

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
