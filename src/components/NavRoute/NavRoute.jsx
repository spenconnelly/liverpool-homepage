import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'

NavRoute.propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    isSelected: PropTypes.bool
}

const useStyles = createUseStyles(theme => ({
    root: {
        color: 'white',
        fontWeight: theme.typography.semiBold,
        textDecoration: 'none',
        fontSize: 20
    },
    selectedModifier: {
        textDecoration: 'underline',
        color: theme.palette.primaryYellow
    }
}))

function NavRoute(props) {
    const {
        children,
        href,
        isSelected
    } = props

    const classes = useStyles()

    return (
        <a className={clsx(classes.root, isSelected && classes.selectedModifier)} href={href}>{ children }</a>
    )
}

export default NavRoute
