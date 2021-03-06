import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../SportsDbApiContextProvider'
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
                    <SportsDbApiContextProvider>
                        <Footer />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const footer = wrapper.find(Footer)

            expect(footer.exists()).toBeTruthy()
        })
    })
})
