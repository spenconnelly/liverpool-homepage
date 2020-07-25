import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import DefaultThemeprovider from '../themes/DefaultThemeProvider'

describe('App component', () => {
    let wrapper

    it('should be defined', () => {
        expect(App).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(<App />)
        })

        it('should render properly', () => {
            const app = wrapper.find(App)

            expect(app.exists()).toBeTruthy()
        })

        it('should use default theme', () => {
            const defaultTheme = wrapper.find(DefaultThemeprovider)

            expect(defaultTheme.exists()).toBeTruthy()
        })
    })
})
