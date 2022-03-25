import styled from "styled-components";
import card1Bg from '../../../Images/Card1Bg.jpg'


export const InformationContainer = styled.div`
    width: 100%;
   
`
export const InfoCards = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        max-width: 1600px;
        column-gap: 1rem;
        row-gap: 1rem;
        justify-content: center;
        align-items:center;
        margin: 2rem;
        overflow: hidden;
        @media screen and (max-width: 840px) {
                grid-template-columns: 1fr;
                margin-right: 2rem;
        }

`
export const InforCard = styled.div`
         display: grid;
         grid-template-columns: 1.5fr 1fr;
         border: 1px solid var(--Menu-color);
         padding: 2rem 1rem;
         height: 250px;
         background-image: linear-gradient(45deg, rgba(32,40,53,1) 0%, rgba(39,38,44,1) 100%);
         position: relative;
         @media screen and (max-width: 640px) {
               width: 400px;
        }
         @media screen and (max-width: 450px) {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

    
`

export const LeftSideCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 1rem;
    z-index: 2;
`
export const CardH3 = styled.h3`
        font-size: 25px;

`
export const CardH1 = styled.h1`
    padding-bottom: 1rem;
    font-size: 50px;
    font-weight: 600;
    span{
        color: var(--theme-color);
    }
    @media screen and (max-width: 640px) {
        font-size: 40px;
        }
`

export const CardP = styled.p`
     padding-bottom: 1rem;
     color: var(--Menu-color);
     width: 130px;
     font-weight: 600;
`
export const CardBtn = styled.button`
    width: 110px;
    height: 40px;
    background-color:#31373e ;
    border: none;
    color: var(--Menu-color);
    text-transform: uppercase;
    transition: all 0.1 ease-in-out;

    &:Hover{
        background-color: var(--theme-color);
        color: black;    transition: all 0.1 ease-in-out;

    }
`
export const RightSideCard = styled.div`
`
export const CardImg = styled.img`
    height:100%;
    position: absolute;
    bottom: 0;
    right: 10%;
   
    @media screen and (max-width: 970px) {
              height: 100%;
              opacity: 50%;

        }


`