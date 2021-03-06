import React from 'react'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'

import SportsDbApiContextProvider from '../SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import NavigationBar from './NavigationBar'

describe('NavigationBar component', () => {
    let wrapper

    it('should be defined', () => {
        expect(NavigationBar).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <SportsDbApiContextProvider>
                    <DefaultThemeProvider>
                        <Router>
                            <NavigationBar />
                        </Router>
                    </DefaultThemeProvider>
                </SportsDbApiContextProvider>
            )
        })

        it('should render properly', () => {
            const navBar = wrapper.find(NavigationBar)

            expect(navBar.exists()).toBeTruthy()
        })
    })
})
