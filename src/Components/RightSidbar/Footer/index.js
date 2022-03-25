import React from 'react'
import { CopyRight, FooterContainer, FooterMenu, FooterMenus, Icons, Logo, LogoImg, LogoT1, LogoT2, LogoText, MenuLi, MenuUl, SocialIconsContainer, TeaxHeader, Text } from './Footer'
import LogoIcon from '../../../Images/Icon2.svg'
import { AiOutlineTwitter,AiOutlineInstagram ,AiOutlineYoutube} from 'react-icons/ai'
import { FaFacebookF,FaTelegramPlane } from 'react-icons/fa'



function Footer() {
    return (
        <FooterContainer>
            <FooterMenus>
                <FooterMenu>
                    <TeaxHeader>About Us</TeaxHeader>
                    <MenuUl>
                        <MenuLi>Profile</MenuLi>
                        <MenuLi>Games</MenuLi>
                        <MenuLi>Online</MenuLi>
                        <MenuLi>Streaming</MenuLi>
                    </MenuUl>
                </FooterMenu>
                <FooterMenu>
                    <TeaxHeader>About Us</TeaxHeader>
                    <MenuUl>
                        <MenuLi>Profile</MenuLi>
                        <MenuLi>Games</MenuLi>
                        <MenuLi>Online</MenuLi>
                        <MenuLi>Streaming</MenuLi>
                    </MenuUl>
                </FooterMenu>
                <FooterMenu>
                    <TeaxHeader>About Us</TeaxHeader>
                    <MenuUl>
                        <MenuLi>Profile</MenuLi>
                        <MenuLi>Games</MenuLi>
                        <MenuLi>Online</MenuLi>
                        <MenuLi>Streaming</MenuLi>
                    </MenuUl>
                </FooterMenu>
                <FooterMenu>
                    <TeaxHeader>About Us</TeaxHeader>
                    <MenuUl>
                        <MenuLi>Profile</MenuLi>
                        <MenuLi>Games</MenuLi>
                        <MenuLi>Online</MenuLi>
                        <MenuLi>Streaming</MenuLi>
                    </MenuUl>
                </FooterMenu>
            </FooterMenus>
            <CopyRight>
                <Logo >
                    <LogoImg src={LogoIcon} />
                    <LogoText>
                        <LogoT1>Gods</LogoT1>
                        <LogoT2>Games</LogoT2>
                    </LogoText>
                </Logo>
                <Text>GGsmes@ 2022 all rightts reserved</Text>
                <SocialIconsContainer>
                    <AiOutlineTwitter />
                    <FaFacebookF />
                    <AiOutlineInstagram />
                    <AiOutlineYoutube />
                    <FaTelegramPlane />

                </SocialIconsContainer>
            </CopyRight>
        </FooterContainer>
    )
}

export default Footer