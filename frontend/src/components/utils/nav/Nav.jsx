import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Div = styled("div")({
  display: "flex",
});
const Li = styled("li")({
  color: "white",
  listStyle: "none",
  marginRight: "20%",
});

const Nav = () => {
  return (
    <Div>
      <Li>
        <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
          HOME
        </Link>
      </Li>
      <Li>
        <Link to="/products" style={{ textDecoration: "none", color: "white" }}>
          SHOP
        </Link>
      </Li>
    </Div>
  );
};

export default Nav;
