import styled from "styled-components";
import BgImage from '../../Images/Header2.jpg'
import BgImageMObile from '../../Images/Header2Mobile.jpg'


export const RightSidbarContainer = styled.div`
    width: 100vw;
    background-color: #1e1e20;

`

export const RightSidbarBackground = styled.div`
    width: 100%;
    height: 600px;
    background-image: url(${BgImage});
    background-size: cover ;
    background-repeat: no-repeat;
    position: relative;
    /* overflow: none; */
    transition: all 0.1s ease-in-out;
    @media screen and (max-width: 830px) {
        transition: all 0.1s ease-in-out;
        background-image: url(${BgImageMObile});
   }

`
export const HeaderText = styled.div`
    position: absolute;
    top: 50%;
    left: 5rem;
    font-size: 4rem;
    font-weight: 900;
    span:nth-child(1){
        color: var( --Menu-color   );
    }
    span:nth-child(2){
        color: var(--theme-color);
    }
    @media screen and (max-width: 830px) {
         font-size: 3rem;
   }
    @media screen and (max-width: 480px) {
         font-size: 2,5rem;
         top: 25%;
   }
    
`
export const HeaderIcon = styled.p`
         margin-top: 5px;
         color: var(--Menu-color );
         font-size: 2rem;
`