import React from "react";
import CartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/system";

const CartIconWrapper = styled("div")({
  display: "flex",
  position: "relative",
});
const Counter = styled("div")({
  position: "absolute",
  height: "20px",
  width: "20px",
  background: "red",
  top: "-10px",
  left: "20px",
  borderRadius: "50%",
});

const Container = styled("div")({
  display: "flex",
  marginLeft: "20%",
});

const CartLogo = () => {
  return (
    <Container>
      <CartIconWrapper>
        <CartIcon />
        <Counter />
      </CartIconWrapper>
    </Container>
  );
};

export default CartLogo;
