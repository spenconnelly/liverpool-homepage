import React from 'react'
import { ThemeProvider } from 'react-jss'
import { defaultThemeOptions } from '../../constants'

const DefaultThemeProvider = props => <ThemeProvider theme={defaultThemeOptions} {...props} />

export default DefaultThemeProvider
