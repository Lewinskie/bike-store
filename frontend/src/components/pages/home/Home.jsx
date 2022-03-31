import React from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import SearchBtn from "../../utils/searchButton/SearchBtn";
import Slider from "../../utils/slider/Slider";

const Container = styled("div")({
  background: "#141414",
  height: "75vh",
});

const Left = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  marginLeft: "5%",
});
const Span = styled("span")({
  color: "red",
});

const Title = styled("div")({
  marginBottom: "20px",
});

const Description = styled("div")({
  marginBottom: "20px",
});

const Home = () => {
  return (
    <Container>
      <Grid container style={{ height: "100%" }}>
        <Grid item sm={12} lg={5} xl={5}>
          <Left>
            <Title>
              <Typography variant="h2" style={{ color: "white" }}>
                Agility <Span>and</Span> performance
              </Typography>
            </Title>
            <Description>
              <Typography style={{ color: "#a6a6a6" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
                tenetur velit culpa repudiandae vero voluptatum animi eius esse
                autem commodi, numquam laudantium amet, provident ad quas
                consectetur voluptates id libero.
              </Typography>
            </Description>

            <div>
              <SearchBtn />
            </div>
          </Left>
        </Grid>
        <Grid item sm={12} lg={7} xl={7}>
          <Slider />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
