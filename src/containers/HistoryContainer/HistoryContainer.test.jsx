import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../../components/SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import HistoryContainer from './HistoryContainer'

describe('HistoryContainer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(HistoryContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <SportsDbApiContextProvider>
                        <HistoryContainer />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const historyContainer = wrapper.find(HistoryContainer)

            expect(historyContainer.exists()).toBeTruthy()
        })
    })
})
