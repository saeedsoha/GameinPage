import React from 'react'
import { Icon, LinkItems, MenuContainer, MenuItems } from './MenuElements'
import {BiSupport } from 'react-icons/bi'
import {VscDebugBreakpointConditionalUnverified } from 'react-icons/vsc'
import {MdSettingsSuggest } from 'react-icons/md'
import { Link } from 'react-router-dom'


function Help() {
    return (
        <MenuContainer style={{paddingTop:'2rem'}}>
            <MenuItems>
                <Icon><BiSupport /></Icon>
                <LinkItems><Link to='Profile'>Help</Link></LinkItems>
            </MenuItems>
            <MenuItems>
                <Icon><VscDebugBreakpointConditionalUnverified /></Icon>
                <LinkItems><Link to='Profile'>Conditions</Link></LinkItems>
            </MenuItems>
            <MenuItems>
                <Icon><MdSettingsSuggest /></Icon>
                <LinkItems><Link to='Profile'>Confidentaility</Link></LinkItems>
            </MenuItems>

        </MenuContainer>
    )
}

export default Help