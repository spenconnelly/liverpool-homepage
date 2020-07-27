import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import { API_ENDPOINTS } from '../../constants'
import EventCard from '../../components/EventCard'
import { useSportsDbApi } from '../../components/SportsDbApiContextProvider'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    titleModifier: {
        margin: 15,
        fontSize: 20,
        fontWeight: theme.typography.bold
    },
    eventContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
}))

const useLiverpoolEvents = () => {
    const [events, setEvents] = useState([])
    const [isEventsLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async function fetchRepos() {
            try {
                const response = await fetch(API_ENDPOINTS.liverpoolEvents)
                const result = await response.json()
                setLoading(false)
                setEvents(result.events)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        })()
    }, [])

    return [events, isEventsLoading, error]
}

function EventsContainer() {
    const classes = useStyles()
    const [events, isEventsLoading, error] = useLiverpoolEvents()
    const { liverpoolData, isDbDataLoading, error: apiError } = useSportsDbApi()

    return (
        <div className={classes.root}>
            { (liverpoolData && !(apiError || isDbDataLoading)) && <img alt="" src={liverpoolData.strTeamBanner} width="100%" /> }
            <div className={classes.titleModifier}>
                Upcoming Events:
            </div>
            <div className={classes.eventContainer}>
                {(error || !events || events.length === 0) ? (
                    <span>
                        No Upcoming Events... We'll be back soon!
                    </span>
                ) : (
                    <>
                        { isEventsLoading && <span>Loading...</span> }
                        { events.map(
                            ({ strEventAlternate, strSeason, strLeague, dateEvent }, index) => (
                                <EventCard
                                    key={`event-card-${index}`}
                                    league={strLeague}
                                    name={strEventAlternate}
                                    season={strSeason}
                                    date={dateEvent}
                                    { ...!(apiError || isDbDataLoading) ? { image: liverpoolData.strTeamJersey } : {} }
                                />
                            ))
                        }
                    </>
                )}
            </div>
        </div>
    )
}

export default EventsContainer
