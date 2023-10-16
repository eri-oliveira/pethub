import { Box, styled } from "@mui/material";

export const Item = styled(Box)(({ theme }) => ({
  maxWidth: "100%",
  height: "100vh",
  boxSizing: "border-box",
  color: theme.palette.common.white,
}));

export const ImageBoxSlider = styled(Box)(({ theme }) => ({
  width: "100vw",
  maxWidth: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  display: "grid",
  textAlign: "center",
  placeContent: "center",
  height: "100%",
  maxHeight: "100%",
  background: "#a4c4b6",
  padding: "20px",
}));
