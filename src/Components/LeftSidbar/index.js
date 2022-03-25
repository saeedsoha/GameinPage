import React from 'react'
import { Button, Container, LeftsidbarContainer, Logo, LogoImg, LogoT1, LogoT2, LogoText, SocialMedia } from './LeftSidbarElements'
import LogoIcon from '../../Images/Icon2.svg'
import ToggleButton from './ToggleButton'
import Menu from './Menu'
import SocialIcons from './SocialIcons'
import Help from './Menu/Help'



function LeftSidbar() {
  return (
    <LeftsidbarContainer>
      <Container>
            <Logo >
                <LogoImg src={LogoIcon}/>
                <LogoText>
                    <LogoT1>Gods</LogoT1>
                    <LogoT2>Games</LogoT2>
                </LogoText>
            </Logo>
            <Button>
                <ToggleButton/>
            </Button>
            <Menu/>
            <SocialIcons/>
            <Help/>
            </Container>
    </LeftsidbarContainer>
  )
}

export default LeftSidbar