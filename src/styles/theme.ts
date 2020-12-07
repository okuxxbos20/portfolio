export const lightTheme = {
  header: 'transparent',
  headerContents: '#262626',
  bg: '#f7f7f7',
  text: '#262626',
  border: '#ccc',
  highlight: '#42b983',
  codeColor: '#eee',
  codeBg: '#272c34',
  tagBg: '#e8ecf1'
} as const

export const darkTheme = {
  header: '#303030',
  headerContents: '#f7f7f7',
  bg: '#202020',
  text: '#eee',
  border: '#555',
  highlight: '#42b983',
  codeColor: '#eee',
  codeBg: '#2e3131',
  tagBg: '#2e3131'
} as const

export type ThemeType = typeof lightTheme | typeof darkTheme
