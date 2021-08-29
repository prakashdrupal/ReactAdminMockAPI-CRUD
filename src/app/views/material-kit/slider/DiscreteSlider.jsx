import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}))

const marks = [
    {
        value: 0,
        label: '0°C',
    },
    {
        value: 20,
        label: '20°C',
    },
    {
        value: 37,
        label: '37°C',
    },
    {
        value: 100,
        label: '100°C',
    },
]

function valuetext(value) {
    return `${value}°C`
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1
}

export default function DiscreteSlider() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                Temperature
            </Typography>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-custom" gutterBottom>
                Custom marks
            </Typography>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-restrict" gutterBottom>
                Restricted values
            </Typography>
            <Slider
                defaultValue={20}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
            />
            <div className={classes.margin} />
            <Typography id="discrete-slider-always" gutterBottom>
                Always visible
            </Typography>
            <Slider
                defaultValue={80}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={10}
                marks={marks}
                valueLabelDisplay="on"
            />
        </div>
    )
}
