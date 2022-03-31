import React, { useState } from "react";
import { styled } from "@mui/system";
import Back from "@mui/icons-material/ArrowBackIos";
import Forward from "@mui/icons-material/ArrowForwardIos";

const SliderContainer = styled("div")({
  display: "flex",
  height: "100%",
  width: "100%",
  position: "relative",
});
const SliderComponent = styled("div")({
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  paddingLeft: "50px",
  bottom: "-100px",
  // overflow: "hidden",
});

const Prev = styled("div")({
  height: "50px",
  width: "50px",
  background: "red",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // position: "absolute",
  cursor: "pointer",
});

const Next = styled("div")({
  // position: "absolute",
  height: "50px",
  width: "50px",
  background: "red",
  // right: "20px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const Slider = () => {
  const stuff = [
    {
      name: "one",
      img: "/photos/img_01.png",
    },
    {
      name: "two",
      img: "/photos/repsol.png",
    },
    {
      name: "three",
      img: "/photos/yamaha.png",
    },
  ];
  const [index, setIndex] = useState();
  const handleNext = () => {
    setIndex();

    console.log(index);
  };
  return (
    <SliderContainer>
      {stuff.map((item, index) => (
        <SliderComponent key={index}>
          <Prev>
            <Back style={{ color: "white" }} />
          </Prev>
          <img src="/photos/img_01.png" alt="" width={600} />
          <Next onClick={() => handleNext()}>
            <Forward style={{ color: "white" }} />
          </Next>
        </SliderComponent>
      ))}
    </SliderContainer>
  );
};

export default Slider;
