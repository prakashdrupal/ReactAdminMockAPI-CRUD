import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { useTheme } from '@material-ui/core/styles'

const ComparisonChart = ({ height, color = [] }) => {
    const theme = useTheme()

    const option = {
        grid: {
            top: '10%',
            bottom: '10%',
            right: '5%',
        },
        legend: {
            show: false,
        },
        color: ['#223388', 'rgba(34, 51, 136, 0.8)'],
        barGap: 0,
        barMaxWidth: '64px',
        tooltip: {},
        dataset: {
            source: [
                ['Month', 'Website', 'App'],
                ['Jan', 2200, 1200],
                ['Feb', 800, 500],
                ['Mar', 700, 1350],
                ['Apr', 1500, 1250],
                ['May', 2450, 450],
                ['June', 1700, 1250],
            ],
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{ type: 'bar' }, { type: 'bar' }],
    }

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{
                ...option,
                // color: [...color],
            }}
        />
    )
}

export default ComparisonChart
