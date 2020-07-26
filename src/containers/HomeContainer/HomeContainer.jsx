import React from 'react'
import { createUseStyles } from 'react-jss'

import NewsDisplay from '../../components/NewsDisplay'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: 20,
        marginBottom: 20
    },
    descriptionContainer: {
        marginLeft: 10,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: 100
    },
    titleModifier: {
        fontSize: 25,
        marginBottom: 15,
        fontWeight: theme.typography.semiBold
    },
    clubNameModifier: {
        fontSize: 30,
        fontWeight: theme.typography.bold,
        margin: 20,
        textTransform: 'uppercase',
        color: theme.palette.secondaryRed
    }
}))

const news = [
    {
        headline: 'LIVERPOOL WIN LEAGUE, FIRST TIME IN 30 YEARS!',
        image: 'https://i2-prod.liverpoolecho.co.uk/incoming/article16366281.ece/ALTERNATES/s1200b/1_JS184303287.jpg'
    },
    {
        headline: 'Liverpool Premier League prize money to be reduced?',
        image: 'https://i.dailymail.co.uk/i/pix/2016/04/13/14/33242F9300000578-0-image-m-60_1460554938978.jpg'
    },
    {
        headline: 'Liverpool fan in transfer talks with William Hill',
        image: 'https://spenconnelly.dev/static/media/faceshot-close.86140b74.jpeg'
    },
    {
        headline: 'Liverpool in talks with Thiago',
        image: 'https://i2.wp.com/metro.co.uk/wp-content/uploads/2020/07/GettyImages-1169542219-4a25.jpg?quality=90&strip=all&zoom=1&resize=644%2C429&ssl=1'
    }
]

function HomeContainer() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.descriptionContainer}>
                <div className={classes.titleModifier}>
                    YOU'LL NEVER WALK ALONE
                </div>
                <div>
                    Welcome to the most successful club in Europe. Recent winners of the Premier League and the European Champions League:
                </div>
                <div className={classes.clubNameModifier}>
                    Liverpool Football Club
                </div>
            </div>
            <NewsDisplay
                news={news}
            />
        </div>
    )
}

export default HomeContainer
