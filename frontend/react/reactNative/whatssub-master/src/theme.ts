interface ITheme {
  colors: object
};

export enum ThemeType {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
};

export const colors = {
  blue: '#4981f2',
  darkGray: '#323b43',
  deepGray: '#596570',
  gray: '#99a2aa',
  lightGray: '#c6ccd1',
  paleGray: '#e1e4e7',
  pale: '#e6eaee',
  lineGray: '#f3f5f7',
  bgGray: '#f9fafb',
  red: '#ff3b30',
  marine: '#023059',
  rosa: '#ff84a5',
  white: '#ffffff',
  black: '#000000',
};

const theme = {
  light: {
    backgroundDark: colors.marine,
    backgroundLight: colors.white,
    btnPrimaryFont: colors.darkGray,
    btnWhiteBorder: colors.paleGray,
    textDisabled: colors.gray,
    btnDisabled: colors.white,
    fontDark: colors.black,
    fontLight: colors.white,
    fontTint: colors.rosa,
  },
  dark: {
    backgroundDark: colors.marine,
    backgroundLight: colors.marine,
    btnPrimaryFont: colors.darkGray,
    btnWhiteBorder: colors.paleGray,
    textDisabled: colors.gray,
    btnDisabled: colors.white,
    fontDark: colors.black,
    fontLight: colors.white,
    fontTint: colors.rosa,
  },
};

export const createTheme = (type = ThemeType.LIGHT) => {
  switch (type) {
    case ThemeType.LIGHT:
      return theme.light;
    case ThemeType.DARK:
      return theme.dark;
  }
};
