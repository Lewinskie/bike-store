import React from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const Div = styled("div")({
  border: "1px solid white",
  borderRadius: "20px",
  width: "100%",
  display: "flex",
});
const SearchIconWrapper = styled("div")({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledInputBase = styled(InputBase)({
  width: "100%",
  color: "inherit",
  paddingLeft: "5%",
});

const Search = () => {
  return (
    <Div>
      <SearchIconWrapper>
        <SearchIcon style={{ marginLeft: "10px", padding: "2px" }} />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search" />
    </Div>
  );
};

export default Search;
