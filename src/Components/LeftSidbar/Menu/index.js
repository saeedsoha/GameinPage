import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, LinkItems, MenuContainer, MenuItems } from './MenuElements'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { BsSearch,BsCurrencyDollar } from 'react-icons/bs'
import { RiUserSearchLine,RiMedalLine } from 'react-icons/ri'
import { BiMessageRounded,BiHappyHeartEyes,BiTask,BiRun} from 'react-icons/bi'
import { MdDeveloperMode, MdOutlinePrivacyTip } from 'react-icons/md'

function Menu() {
  return (
    <MenuContainer>
        <MenuItems>
            <Icon><AiOutlineUser/></Icon>
            <LinkItems><Link to='Profile'>Profile</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BsSearch/></Icon>
            <LinkItems><Link to='/'>Search</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><RiUserSearchLine/></Icon>
            <LinkItems><Link to='/profile'>Friends</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BiMessageRounded/></Icon>
            <LinkItems><Link to='/message'>Messages</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><MdDeveloperMode/></Icon>
            <LinkItems><Link to='/developments'>Developments</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BiHappyHeartEyes/></Icon>
            <LinkItems><Link to='/matches'>Mathces</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><RiMedalLine/></Icon>
            <LinkItems><Link to='/score'>Score</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BiTask/></Icon>
            <LinkItems><Link to='tasks'>Tasks</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><AiOutlineHeart/></Icon>
            <LinkItems><Link to='favorite'>Favorite</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BiRun/></Icon>
            <LinkItems><Link to='/tournaments'>Tournaments</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><BsCurrencyDollar/></Icon>
            <LinkItems><Link to='balance'>Balance</Link></LinkItems>
        </MenuItems>
        <MenuItems>
        <Icon><MdOutlinePrivacyTip/></Icon>
            <LinkItems><Link to='suggestions'>Suggestions</Link></LinkItems>
        </MenuItems>
    </MenuContainer>
  )
}

export default Menu