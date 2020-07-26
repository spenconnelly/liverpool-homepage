import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'
import { withRouter } from 'react-router-dom'
import { useSportsDbApi } from '../SportsDbApiContextProvider'

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
        height: 55,
        paddingLeft: 15,
        paddingRight: 15,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            height: 150,
            paddingLeft: 50,
            paddingRight: 50
        }
    },
    logoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    imageModifier: {
        width: 50,
        height: 50,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: 100,
            height: 100
        }
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
    const { liverpoolData, isDbDataLoading, error } = useSportsDbApi()

    return (
        <header className={classes.root}>
            <div className={classes.logoContainer}>
                { (isDbDataLoading || error) ? (
                    <></>
                ) : (
                    <img className={classes.imageModifier} alt="Liverpool FC" src={liverpoolData.strTeamBadge} />
                )}
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
