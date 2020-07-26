import React from 'react'
import { createUseStyles } from 'react-jss'

import { useSportsDbApi } from '../../components/SportsDbApiContextProvider'

const useStyles = createUseStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleModifier: {
        fontSize: 25,
        marginBottom: 15,
        fontWeight: theme.typography.semiBold
    },
    contentContainer: {
        textAlign: 'center',
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    imageContainer: {
        marginTop: 15
    }
}))

function FansContainer(props) {
    const classes = useStyles()
    const { liverpoolData, isDbDataLoading, error } = useSportsDbApi()

    return (
        <div className={classes.root}>
            <div className={classes.titleModifier}>
                Message to the fans:
            </div>
            <div className={classes.contentContainer}>
                Congratualtions to everyone on the club's first Premier League title in 30 years. Here is a video and some other fan art to highlight the journey! You'll Never Walk Alone.
            </div>
            <iframe
                title="Thank you fans"
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/WHEthsO7T7w"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            { liverpoolData && !(isDbDataLoading || error) && (
                <>
                    <div>
                        <img className={classes.imageContainer} alt="fanart1" src={liverpoolData.strTeamFanart1} width="100%" />
                    </div>
                    <div>
                        <img className={classes.imageContainer} alt="fanart1" src={liverpoolData.strTeamFanart2} width="100%" />
                    </div>
                    <div>
                        <img className={classes.imageContainer} alt="fanart1" src={liverpoolData.strTeamFanart3} width="100%" />
                    </div>
                    <div>
                        <img className={classes.imageContainer} alt="fanart1" src={liverpoolData.strTeamFanart4} width="100%" />
                    </div>
                </>
            )}
        </div>
    )
}

export default FansContainer
