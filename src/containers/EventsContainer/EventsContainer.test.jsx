import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../../components/SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import EventsContainer from './EventsContainer'

describe('EventsContainer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(EventsContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <SportsDbApiContextProvider>
                        <EventsContainer />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const eventsContainer = wrapper.find(EventsContainer)

            expect(eventsContainer.exists()).toBeTruthy()
        })
    })
})
