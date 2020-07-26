import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import SportsDbApiContextProvider from '../components/SportsDbApiContextProvider'
import Footer from '../components/Footer'
import ContentContainer from '../components/ContentContainer'

import HomeContainer from '../containers/HomeContainer'
import EventsContainer from '../containers/EventsContainer'
import FansContainer from '../containers/FansContainer'
import HistoryContainer from '../containers/HistoryContainer'

const useStyles = createUseStyles({
})

const navRoutes = [
    {
        label: 'Home',
        value: '/'
    },
    {
        label: 'Events',
        value: '/events'
    },
    {
        label: 'Fans',
        value: '/fans'
    },
    {
        label: 'History',
        value: '/history'
    }
]

function App() {
    const classes = useStyles()

    return (
        <SportsDbApiContextProvider>
            <div className={classes.root}>
                <Router>
                    <NavigationBar navRoutes={navRoutes} />
                    <ContentContainer>
                        <Switch>
                            <Route path="/events" component={EventsContainer} />
                            <Route path="/fans" component={FansContainer} />
                            <Route path="/history" component={HistoryContainer} />
                            <Route path="/" component={HomeContainer} />
                            <Redirect path="*" to="/" />
                        </Switch>
                    </ContentContainer>
                </Router>
            </div>
            <Footer />
        </SportsDbApiContextProvider>
    )
}

export default App
