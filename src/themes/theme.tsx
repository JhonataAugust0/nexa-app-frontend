import { ThemeProvider } from "styled-components";

const fontSizes: any = [14, 20, 96];

fontSizes.body = fontSizes[0];
fontSizes.bodyExtraLarge = fontSizes[1];
fontSizes.displayExtraLarge = fontSizes[2];

const colorPrimary = '#6EC1E4';
const colorSecondary = '#54595F';
const colorTertiary = '#fefefefe';
const colorText = '#7A7A7A';
const colorAccent = '#61CE70';

export const theme = {
  fontSizes,
  colors: {
    colorPrimary,
    colorSecondary,
    colorTertiary,
    colorText,
    colorAccent,
  }
}

export type Theme = typeof theme;

type ThemeProps = {
  children: React.ReactNode;
};

export const ThemeProviderComponent: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
