import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@material-ui/core'
import { useSelector } from 'react-redux'

const MatxHorizontalNav = ({ max }) => {
    let navigation = useSelector(({ navigations }) => navigations)

    if (!navigation || !navigation.length) {
        return null
    }

    if (max && navigation.length > max) {
        let childItem = {
            name: 'More',
            icon: 'more_vert',
            children: navigation.slice(max, navigation.length),
        }
        navigation = navigation.slice(0, max)
        navigation.push(childItem)
    }

    function renderLevels(levels) {
        return levels.map((item, key) => {
            if (item.type === 'label') return null
            if (item.children) {
                return (
                    <li key={key}>
                        <a href="/">
                            {item.icon && (
                                <Icon className="text-18 align-middle">
                                    {item.icon}
                                </Icon>
                            )}
                            {item.name}
                        </a>
                        <ul>{renderLevels(item.children)}</ul>
                    </li>
                )
            } else {
                return (
                    <li key={key}>
                        <NavLink to={item.path}>
                            {item.icon && (
                                <Icon className="text-18 align-middle">
                                    {item.icon}
                                </Icon>
                            )}
                            {item.name}
                        </NavLink>
                    </li>
                )
            }
        })
    }

    return (
        <div className={'horizontal-nav'}>
            <ul className={'menu'}>{renderLevels(navigation)}</ul>
        </div>
    )
}

export default MatxHorizontalNav
