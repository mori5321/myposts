type Color = string;

enum ColorPallete {
  black = "#252525",
  pureWhite = "#FFFFFF",
}

type ColorKeys =
  "textPrimary"
  | "backgroundPrimary"

type ColorSet = { [Key in ColorKeys]: Color }
const basicColorSet: ColorSet = {
  textPrimary: ColorPallete.black,
  backgroundPrimary: ColorPallete.pureWhite
}

export { basicColorSet }
