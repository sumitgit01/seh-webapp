import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Link } from "react-router-dom";

function ButtonComp(props) {
  return (
    <>
      <Button
        component={Link}
        variant="contained"
        style={{ backgroundColor: lightGreen[500] }}
        endIcon={<SendIcon />}
        to="/enrollnow"
      >
        {props.label}
      </Button>
    </>
  );
}

export default ButtonComp;
