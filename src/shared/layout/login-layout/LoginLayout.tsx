import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { SliderInterface, sliderObject } from "./helper";
import { ImageBox, ImageBoxSlider, Item } from "./styles";

export default function LoginLayout() {
  const [activeSlider, setActiveSlider] = useState<SliderInterface>(
    sliderObject[0]
  );

  const maxSliders = sliderObject.length - 1;
  const [imageIndex, setImageIndex] = useState<number>(0);

  setTimeout(() => {
    if (imageIndex === maxSliders) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
      console.log(imageIndex + 1);
    }

    setActiveSlider(sliderObject[imageIndex]);
  }, 6000);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Item>
          <ImageBoxSlider>
            <ImageBox>
              <img src={activeSlider.path} alt={activeSlider.alt} />
              <Typography variant="h6">{activeSlider.title}</Typography>
              <Typography variant="body1">{activeSlider.text}</Typography>
            </ImageBox>
          </ImageBoxSlider>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <Item>Login</Item>
      </Grid>
    </Grid>
  );
}
