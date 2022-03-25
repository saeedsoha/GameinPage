import React from 'react'
import { SocialIconsContainer } from './SocialIconsElements'
import { AiOutlineTwitter,AiOutlineInstagram ,AiOutlineYoutube} from 'react-icons/ai'
import { FaFacebookF,FaTelegramPlane } from 'react-icons/fa'



function SocialIcons() {
  return (
    <SocialIconsContainer>
        <AiOutlineTwitter/>
        <FaFacebookF/>
        <AiOutlineInstagram/>
        <AiOutlineYoutube/>
        <FaTelegramPlane/>
        
    </SocialIconsContainer>
  )
}

export default SocialIcons