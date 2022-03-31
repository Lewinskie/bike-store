import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const StyledButton = styled(Button)({
  background: "red",
  color: "white",
});
const SearchBtn = () => {
  return (
    <ButtonContainer>
      <StyledButton>Search now</StyledButton>
    </ButtonContainer>
  );
};

export default SearchBtn;
