import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Span = styled("span")({
  color: "red",
});

const Logo = () => {
  return (
    <div>
      <Typography variant="h4">
        COREY<Span>CYCLES</Span>
      </Typography>
      <Typography></Typography>
    </div>
  );
};

export default Logo;
