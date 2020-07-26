import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import NewsDisplay from './NewsDisplay'

describe('NewsDisplay component', () => {
    let wrapper

    it('should be defined', () => {
        expect(NewsDisplay).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <SportsDbApiContextProvider>
                        <NewsDisplay
                            news={
                                [
                                    {
                                        headline: 'test',
                                        image: 'test'
                                    }
                                ]
                            }
                        />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const newsDisplay = wrapper.find(NewsDisplay)

            expect(newsDisplay.exists()).toBeTruthy()
        })
    })
})
