import React from "react";
import { Avatar } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const AvatarContainer = styled("div")({
  cursor: "pointer",
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "flex-end",
});

const AvatarIcon = () => {
  return (
    <AvatarContainer>
      <Link to="/settings">
        <Avatar />
      </Link>
    </AvatarContainer>
  );
};

export default AvatarIcon;
