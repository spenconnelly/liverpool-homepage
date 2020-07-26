import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { createUseStyles } from 'react-jss'

EventCard.propTypes = {
    date: PropTypes.string,
    image: PropTypes.string,
    league: PropTypes.string,
    name: PropTypes.string,
    season: PropTypes.string
}

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignItems: 'center',
        width: '80%',
        minHeight: 200,
        paddingTop: 10,
        paddingLeft: 20
    },
    infoContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    imageModifier: {
        width: 150,
        height: 150
    },
    titleModifier: {
        fontSize: 18,
        fontWeight: theme.typography.semiBold
    }
}))

function EventCard(props) {
    const {
        date,
        image,
        league,
        name,
        season
    } = props

    const classes = useStyles()

    return (
        <Paper
            className={classes.root}
            elevation={2}
        >
            <div className={classes.infoContainer}>
                <span className={classes.titleModifier}>{ name }</span>
                <div>{ league }</div>
                <div>{ season }</div>
                <div>Where: { date }</div>
            </div>
            { image && (
                <div>
                    <img className={classes.imageModifier} alt="event" src={image} />
                </div>
            )}
        </Paper>
    )
}

export default EventCard
