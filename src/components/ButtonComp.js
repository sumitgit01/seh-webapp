import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

function ButtonComp(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: lightGreen[500] }}
        endIcon={<SendIcon />}
        onClick={() => navigate("/enroll")}
      >
        {props.label}
      </Button>
    </div>
  );
}

export default ButtonComp;
