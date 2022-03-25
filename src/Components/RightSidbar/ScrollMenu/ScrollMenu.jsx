import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'


export const ScrollNavContainer = styled.div`
    width: 90%;
    display: grid;
    /* grid-template-columns: repeat(auto-fit, minmax(2rem, 1fr)); */

    grid-template-columns: 2fr 1fr;
    padding: 2rem;
    @media screen and (max-width: 840px) {
         padding: 1rem;
         font-size: .7rem;
   }
`
export const MobileNav = styled.div`
       display: none;

@media screen and (max-width: 480px) {
    display: block;
    position: absolute
    ;
    top: 2rem;
    left: 3rem;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    }
`
export const Navmenu = styled.ul`
    
`
export const NavItem = styled.li`
    display: flex;
    column-gap: 2rem;
`
export const NavLinks = styled(LinkS)`
    font-size: 1rem;
    color:var(--Menu-color) ;
    font-weight: 700;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid var(--theme-color);
    }
    @media screen and (max-width: 840px) {
         font-size: .9rem;
   }
    @media screen and (max-width: 480px) {
         font-size: .7rem;
   }
   &:hover{
       color: var(--theme-color) ;
   }
   @media screen and (max-width: 320px) {
         display: none;
   }

    
`
export const ScrollNavIcons = styled.div`
   display: flex;
   justify-content: end;
   column-gap: 1rem;
   margin-right: 2rem;
   color:var(--Menu-color) ;


   @media screen and (max-width: 480px) {
         display: none;

   }
`
