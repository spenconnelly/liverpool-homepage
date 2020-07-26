import React from 'react'
import { createUseStyles } from 'react-jss'
import clsx from 'clsx'

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: theme.palette.primaryGreen,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            minHeight: 'calc(100vh - 205px)',
        }
    },
    contentContainer: {
        display: 'block',
        width: '100%',
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'white',
        maxWidth: theme.breakpoints.md,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            minHeight: 'calc(100vh - 205px)',
        }
    }
}))

function ContentContainer({ className, children, ...props }) {
    const classes = useStyles()

    return (
        <div className={clsx(classes.root, className)} {...props}>
            <div className={classes.contentContainer}>
                { children }
            </div>
        </div>
    )
}

export default ContentContainer
