import React from 'react'
import { LeftNav, NavbarContainer, NavIcons, NavSearch, NavSearchContainer, NavToggle, ProfilePic, RightNav, RightNavText } from './NavbarEelemnts'
import Avatar from '@mui/material/Avatar';
import AvatarPic from '../../../Images/Avatar.jpg'
import ToggleBtn from './ToggleBtn';
import SearchNav from './SearchNav';
import { Badge } from '@mui/material';
import { IoIosNotificationsOutline } from 'react-icons/io'
import { FiTwitch } from 'react-icons/fi'




function Navbar() {
  return (
    <NavbarContainer>
      <LeftNav>
        <NavSearchContainer>
                  <SearchNav  />
        </NavSearchContainer>
        <NavIcons >
          <Badge badgeContent={4}  color="secondary">
            <IoIosNotificationsOutline color='#464f54' />
          </Badge>
          <Badge badgeContent={2}  color="secondary">
            <FiTwitch color='#464f54' />
          </Badge>
        </NavIcons>
      </LeftNav>
      <RightNav>
        <RightNavText>Dota2</RightNavText>
        <ToggleBtn />
        <RightNavText>LOL</RightNavText>
        <Avatar alt="Remy Sharp" src={AvatarPic}
          style={{ border: '1px solid black' }}
        />

      </RightNav>
    </NavbarContainer>
  )
}

export default Navbar