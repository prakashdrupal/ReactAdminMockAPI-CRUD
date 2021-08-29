import React from 'react'
import ReactEcharts from 'echarts-for-react'
import { useTheme } from '@material-ui/core/styles'

const ComparisonChart2 = ({ height }) => {
    const { palette } = useTheme()

    const option = {
        grid: {
            left: '6%',
            bottom: '10%',
            right: '1%',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        color: [
            palette.primary.dark,
            palette.primary.light,
            palette.secondary.light,
            palette.error.light,
        ],
        barMaxWidth: '10px',
        tooltip: {},
        dataset: {
            source: [
                ['Month', 'Website', 'App', 'Linux', 'Windows'],
                ['Jan', 2200, 1200, 950, 800],
                ['Feb', 800, 500, 1500, 600],
                ['Mar', 700, 1350, 800, 700],
                ['Apr', 1500, 1250, 950, 900],
                ['May', 2450, 450, 950, 500],
                ['June', 1700, 1250, 1500, 800],
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
                color: palette.text.secondary,
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
                    color: palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    barBorderRadius: [10, 10, 0, 0],
                },
            },
        ],
    }

    return <ReactEcharts style={{ height: height }} option={option} />
}

export default ComparisonChart2
