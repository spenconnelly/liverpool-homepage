import React from 'react'
import { ThemeProvider } from 'react-jss'
import { defaultThemeOptions } from '../../constants'

const DefaultThemeProvider = () => <ThemeProvider theme={defaultThemeOptions} />

export default DefaultThemeProvider
