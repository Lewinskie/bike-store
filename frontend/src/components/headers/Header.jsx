import React from "react";
import CartLogo from "../utils/cartLogo/CartLogo";
import Logo from "../utils/logo/Logo";
import Nav from "../utils/nav/Nav";
import Search from "../utils/search/Search";
import { styled } from "@mui/material/styles";
import { Toolbar, AppBar, Grid } from "@mui/material";
import AvatarIcon from "../utils/profile/Avatar";

const AppBarStyled = styled(AppBar)({
  position: "sticky",
  background: "#21211f",
  color: "white",
  width: "100%",
});

const Header = () => {
  return (
    <AppBarStyled>
      <Toolbar>
        <Grid container style={{ display: "flex", alignItems: "center" }}>
          <Grid item md={4} lg={4} xl={4}>
            <Logo />
          </Grid>
          <Grid item md={4} lg={4} xl={4}>
            <Nav />
          </Grid>
          <Grid item md={2} lg={2} xl={2}>
            <Search />
          </Grid>
          <Grid item md={1} lg={1} xl={1}>
            <CartLogo />
          </Grid>
          <Grid item md={1} lg={1} xl={1}>
            <AvatarIcon />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBarStyled>
  );
};

export default Header;
