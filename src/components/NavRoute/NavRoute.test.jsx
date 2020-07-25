import React from 'react'
import { mount } from 'enzyme'

import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import NavRoute from './NavRoute'

describe('NavRoute component', () => {
    let wrapper

    it('should be defined', () => {
        expect(NavRoute).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <NavRoute />
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const navRoute = wrapper.find(NavRoute)

            expect(navRoute.exists()).toBeTruthy()
        })
    })
})
