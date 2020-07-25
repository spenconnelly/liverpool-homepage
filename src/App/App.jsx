import React from 'react'
import { createUseStyles } from 'react-jss'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom'

import NavigationBar from '../components/NavigationBar'
import HomeContainer from '../containers/HomeContainer'
import Footer from '../components/Footer'

const useStyles = createUseStyles({
    root: {
        minHeight: 'calc(100vh - 55px)'
    }
})

const navRoutes = [
    {
        label: 'Home',
        value: '/'
    },
    {
        label: 'About',
        value: '/about'
    }
]

function App() {
    const classes = useStyles()

    return (
        <>
            <Router>
                <div className={classes.root}>
                    <NavigationBar navRoutes={navRoutes} />
                    <Switch>
                        <Route path="/" component={HomeContainer} />
                        <Redirect path="*" to="/" />
                    </Switch>
                </div>
            </Router>
            <Footer />
        </>
    )
}

export default App
