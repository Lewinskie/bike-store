import React, { useState } from "react";
import { styled } from "@mui/system";
import Back from "@mui/icons-material/ArrowBackIos";
import Forward from "@mui/icons-material/ArrowForwardIos";
import { SliderData } from "./sliderData";
import "./slider.css";

const SliderContainer = styled("div")({
  display: "flex",
  height: "100%",
  width: "100%",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

const Prev = styled("div")({
  height: "50px",
  width: "50px",
  background: "red",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  left: "30px",
  zIndex: 1,
});

const Next = styled("div")({
  height: "50px",
  width: "50px",
  background: "red",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  position: "absolute",
  top: "50%",
  right: "30px",
  zIndex: 1,
});

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const handleNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  const handlePrev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };
  return (
    <SliderContainer>
      <Prev className="prev" onClick={() => handlePrev()}>
        <Back style={{ color: "white" }} />
      </Prev>
      <Next className="next" onClick={() => handleNext()}>
        <Forward style={{ color: "white" }} />
      </Next>

      {SliderData.map((slide, index) => (
        <div key={index} className={index === current ? "active" : "slide"}>
          <img src={slide.img} alt="" width={600} />
        </div>
      ))}
    </SliderContainer>
  );
};

export default Slider;
