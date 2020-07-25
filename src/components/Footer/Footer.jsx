import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primaryRed,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
}))

function Footer() {
    const classes = useStyles()

    return (
        <footer className={classes.root}>
            hi
        </footer>
    )
}

export default Footer
