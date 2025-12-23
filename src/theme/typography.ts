// ====================== THEME - TYPOGRAPHY ====================== //

import { palette } from "./palette";

export const typography = {
  fontFamily: `"Roboto", sans-serif`,

  h1: {
    fontSize: "34px",
    fontWeight: 700,
    lineHeight: "40px",
    color: palette.grey[900],
  },

  h2: {
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: "29px",
    color: palette.grey[900],
  },

  h3: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "23px",
    color: palette.grey[900],
  },

  h4: {
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "20px",
    color: palette.grey[900],
  },

  h5: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "19px",
    color: palette.grey[900],
  },

  h6: {
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: "19px",
    color: palette.grey[900],
  },

  subtitle1: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "25px",
    color: palette.grey[900],
  },

  subtitle2: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "19px",
    color: palette.grey[900],
  },

  body1: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "19px",
    color: palette.grey[700],
  },

  body2: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color: palette.grey[700],
  },

  button: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "25px",
    color: palette.grey[700],
  },

  caption: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "20px",
    color: palette.grey[500],
  },

  overline: {
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "32px",
    color: palette.grey[700],
  },

  link: {
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "21px",
    color: palette.primary.main,
  },
};

export default typography;
