import React from 'react'
import { mount } from 'enzyme'

import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import ContentContainer from './ContentContainer'

describe('ContentContainer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(ContentContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <ContentContainer />
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const contentContainer = wrapper.find(ContentContainer)

            expect(contentContainer.exists()).toBeTruthy()
        })
    })
})
