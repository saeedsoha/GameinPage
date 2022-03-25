import React from 'react'
import { MobileNav, NavItem, NavLinks, Navmenu, NavMenu, ScrollNavContainer, ScrollNavIcons } from './ScrollMenu'
import { BsYoutube, BsTwitter, BsFacebook, BsFillShareFill } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'

function ScrollNav() {
  return (
    <>

      <ScrollNavContainer>

        <Navmenu>
          <MobileNav>
            <FaBars />
          </MobileNav>
          <NavItem>
            <NavLinks to='information' spy={true} smooth={true} offset={-80} duration={500} exact='true'>
              Basic information
            </NavLinks>
            <NavLinks to='statistics' spy={true} smooth={true} offset={-80} duration={500} exact='true'>
              Statistics
            </NavLinks>
            <NavLinks to='updates' spy={true} smooth={true} offset={-80} duration={500} exact='true'>
              My Team
            </NavLinks>
            <NavLinks to='rank ' spy={true} smooth={true} offset={-80} duration={500} exact='true'>
              Solo/Duo
            </NavLinks>
            <NavLinks to='friends' spy={true} smooth={true} offset={-80} duration={500} exact='true'>
              Friends
            </NavLinks>
          </NavItem>
        </Navmenu>
        <ScrollNavIcons>
          <BsYoutube />
          <BsTwitter />
          <BsFacebook />
          <BsFillShareFill />
        </ScrollNavIcons>
      </ScrollNavContainer>
    </>

  )
}

export default ScrollNav