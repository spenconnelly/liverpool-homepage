import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../../components/SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import HomeContainer from './HomeContainer'

describe('HomeContainer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(HomeContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <SportsDbApiContextProvider>
                        <HomeContainer />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const homeContainer = wrapper.find(HomeContainer)

            expect(homeContainer.exists()).toBeTruthy()
        })
    })
})
