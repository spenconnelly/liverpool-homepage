import React from 'react'
import { mount } from 'enzyme'

import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import EventCard from './EventCard'

describe('EventCard component', () => {
    let wrapper

    it('should be defined', () => {
        expect(EventCard).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <EventCard />
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const eventCard = wrapper.find(EventCard)

            expect(eventCard.exists()).toBeTruthy()
        })
    })
})
