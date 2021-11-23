import 'styled-components';


declare module 'styled-components' {
  export interface DefaultTheme {
      textColor: string,
      backgroundColor: string,
    btnBackgroundColor: string,
    btnTextColor: string,
    accentColor: string,
    pointBackgroundColor: string,
    pointTextColor:string,
  }
}