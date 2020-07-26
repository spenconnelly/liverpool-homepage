import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSportsDbApi } from '../../components/SportsDbApiContextProvider'
import IconButton from '@material-ui/core/IconButton'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primaryRed,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    iconModifier: {
        color: theme.palette.primaryYellow
    }
}))

function Footer() {
    const classes = useStyles()
    const { liverpoolData, error } = useSportsDbApi()

    return (
        <footer className={classes.root}>
            { (error) ? (
                <span>
                    Liverpool FC
                </span>
            ) : (
                <>
                    <IconButton
                        href={'//'.concat(liverpoolData.strYoutube)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <YouTubeIcon className={classes.iconModifier} />
                    </IconButton>
                    <IconButton
                        href={'//'.concat(liverpoolData.strInstagram)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon className={classes.iconModifier} />
                    </IconButton>
                    <IconButton
                        href={'//'.concat(liverpoolData.strTwitter)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon className={classes.iconModifier} />
                    </IconButton>
                    <IconButton
                        href={'//'.concat(liverpoolData.strFacebook)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon className={classes.iconModifier} />
                    </IconButton>
                </>
            )}
        </footer>
    )
}

export default Footer
