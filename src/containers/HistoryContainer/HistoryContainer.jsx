import React from 'react'
import { createUseStyles } from 'react-jss'

import { useSportsDbApi } from '../../components/SportsDbApiContextProvider'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    titleModifier: {
        margin: 15,
        fontSize: 20,
        fontWeight: theme.typography.bold
    },
    descriptionContainer: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 100,
        lineHeight: 2
    },
    imageContainer: {
        fontSize: 13,
        fontWeight: theme.typography.light,
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 15
    }
}))

function HistoryContainer() {
    const classes = useStyles()
    const { liverpoolData, isDbDataLoading, error } = useSportsDbApi()

    return (
        <div className={classes.root}>
            <div className={classes.titleModifier}>
                History
            </div>

            { (liverpoolData && !(error || isDbDataLoading)) && (
                <>
                    <div className={classes.descriptionContainer}>
                        { liverpoolData.strDescriptionEN }
                    </div>
                    <div className={classes.imageContainer}>
                        <img className={classes} alt="stadium" src={liverpoolData.strStadiumThumb} width="100%" />
                        <span className={classes.imageCaption}>{ liverpoolData.strStadium }</span>
                    </div>
                    <div className={classes.descriptionContainer}>
                        { liverpoolData.strStadiumDescription }
                    </div>
                </>
            )}
        </div>
    )
}

export default HistoryContainer
