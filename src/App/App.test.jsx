import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import DefaultThemeprovider from '../themes/DefaultThemeProvider'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

describe('App component', () => {
    let wrapper

    it('should be defined', () => {
        expect(App).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeprovider>
                    <App />
                </DefaultThemeprovider>
            )
        })

        it('should render properly', () => {
            const app = wrapper.find(App)

            expect(app.exists()).toBeTruthy()
        })

        it('should render Footer component', () => {
            const footer = wrapper.find(Footer)

            expect(footer.exists()).toBeTruthy()
        })
    })
})
