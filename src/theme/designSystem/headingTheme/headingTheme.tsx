import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseH1Styles = {
  fontFamily: "Roobert",
  fontSize: "120px",
  letterSpacing: "-4px",
  lineHeight: "120px",
};

/* H1 VARIANTS */
const H1LIGHT = defineStyle({
  ...baseH1Styles,
  fontWeight: 300,
});

const H1REGULAR = defineStyle({
  ...baseH1Styles,
  fontWeight: 400,
});

const H1MEDIUM = defineStyle({
  ...baseH1Styles,
  fontWeight: 500,
});

const H1SEMIBOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 600,
});

const H1BOLD = defineStyle({
  ...baseH1Styles,
  fontWeight: 700,
});

const H1BOLDER = defineStyle({
  ...baseH1Styles,
  fontWeight: 900,
});

export const HeadingTheme = defineStyleConfig({
  variants: {
    H1LIGHT,
    H1REGULAR,
    H1MEDIUM,
    H1SEMIBOLD,
    H1BOLD,
    H1BOLDER,
  },
});
