import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { withRouter } from 'react-router-dom'

import NavRoute from '../NavRoute/NavRoute'

NavigationBar.propTypes = {
    history: PropTypes.object,
    navRoutes: PropTypes.array
}

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primaryRed,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 50,
        paddingRight: 50,
        height: 55,
    },
    navigationContainer: {
        display: 'flex',
        width: 300,
        justifyContent: 'space-between'
    }
}))

function NavigationBar(props) {
    const {
        history,
        navRoutes
    } = props

    const classes = useStyles()

    return (
        <header className={classes.root}>
            <div>
                logo
            </div>
            <nav className={classes.navigationContainer}>
                { navRoutes && navRoutes.map(({ label, value }, index) => (
                    <NavRoute
                        key={`nav-route-${index}`}
                        isSelected={history.location.pathname === value}
                        href={value}
                    >
                        { label }
                    </NavRoute>
                ))}
            </nav>
        </header>
    )
}

export default withRouter(NavigationBar)
