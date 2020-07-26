import React from 'react'
import { mount } from 'enzyme'

import SportsDbApiContextProvider from '../../components/SportsDbApiContextProvider'
import DefaultThemeProvider from '../../themes/DefaultThemeProvider'
import FansContainer from './FansContainer'

describe('FansContainer component', () => {
    let wrapper

    it('should be defined', () => {
        expect(FansContainer).toBeDefined()
    })

    describe('Rendering', () => {
        beforeEach(() => {
            wrapper = mount(
                <DefaultThemeProvider>
                    <SportsDbApiContextProvider>
                        <FansContainer />
                    </SportsDbApiContextProvider>
                </DefaultThemeProvider>
            )
        })

        it('should render properly', () => {
            const fansContainer = wrapper.find(FansContainer)

            expect(fansContainer.exists()).toBeTruthy()
        })
    })
})
