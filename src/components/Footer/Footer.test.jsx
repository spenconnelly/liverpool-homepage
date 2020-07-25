import React from 'react'
import { mount } from 'enzyme'

import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import Footer from './Footer'

describe('Footer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(Footer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <Footer />
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const footer = wrapper.find(Footer)

            expect(footer.exists()).toBeTruthy()
        })
    })
})
