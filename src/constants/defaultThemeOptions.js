import breakpoints from './breakpoints'
import {
    lightRed,
    darkRed,
    lightYellow,
    lightGreen,
    darkGreen
} from './colors'

export default {
    breakpoints,
    palette: {
        primaryRed: lightRed,
        secondaryRed: darkRed,
        primaryGreen: lightGreen,
        secondaryGreen: darkGreen,
        primaryYellow: lightYellow
    },
    typography: {
        light: 300,
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
        extraBold: 800,
        black: 900
    }
}
