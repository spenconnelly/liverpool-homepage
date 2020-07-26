import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { createUseStyles } from 'react-jss'
import Button from '@material-ui/core/Button'

NewsDisplay.propTypes = {
    className: PropTypes.string,
    news: PropTypes.array.isRequired
}

const useStyles = createUseStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'row',
        }
    },
    headlineContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageModifier: {
        width: '100%',
        height: '100%',
        maxWidth: 487,
        maxHeight: 487,
        [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
            width: 300,
            height: 300
        }
    }
}))

const NewsButton = ({ onClick, children, isSelected }) => {
    const regStyle = {
        minHeight: 75,
        color: 'white',
        backgroundColor: '#505050',
        fontFamily: 'Recursive',
        borderRadius: 0
    }

    const selectedStyle = {
        minHeight: 75,
        color: 'white',
        backgroundColor: '#B8161F',
        fontFamily: 'Recursive',
        fontWeight: 800,
        borderRadius: 0
    }

    return (
        <Button
            onClick={onClick}
            style={isSelected ? selectedStyle : regStyle}
        >
            { children }
        </Button>
    )
}

function NewsDisplay(props) {
    const {
        className,
        news = []
    } = props

    const classes = useStyles()
    const [headlineIndex, setHeadlineIndex] = useState(0)

    // Rotate through news events
    useEffect(() => {
        const incrementNewsLoop =
            setInterval(() => {
                if (headlineIndex < news.length -1) {
                    setHeadlineIndex(headlineIndex + 1)
                } else {
                    setHeadlineIndex(0)
                }
            }, 3500)

        return () => clearInterval(incrementNewsLoop)
    }, [headlineIndex, news.length])

    return (
        <div className={clsx(classes.root, className)}>
            <div className={classes.headlineContainer}>
                {news.map(({ headline }, index) => (
                    <NewsButton
                        key={`news-button-${index}`}
                        isSelected={index === headlineIndex}
                        onClick={() => setHeadlineIndex(index)}
                    >
                        { headline }
                    </NewsButton>
                ))}
            </div>
            <div className={classes.imageContainer}>
                <img className={classes.imageModifier} alt="headline" src={news[headlineIndex].image} />
            </div>
        </div>
    )
}

export default NewsDisplay
