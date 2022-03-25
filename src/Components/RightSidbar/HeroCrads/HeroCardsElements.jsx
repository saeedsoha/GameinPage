import styled from "styled-components";



export const HeroCardsContainer = styled.div`
    padding: 1rem;
    margin: 0 2rem;
    background-color: #1e1e20;

    /* background-color:#23262d ; */
    @media screen and (max-width: 1600px) {
        /* display: none; */
    }
`
export const HeroCardsItems = styled.div`
   display: grid;
   /* grid-template-columns: repeat(4, 1fr); */
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
   row-gap: 1.5rem;
   column-gap: 1rem;
  
   /* @media screen and (max-width: 680px) {
    grid-template-columns:1fr 1fr;

   }
   @media screen and (max-width: 480px) {
    grid-template-columns:1fr;

   } */

`
export const HeroCardss = styled.div`
   display: grid;
   grid-template-columns: 1fr;
   row-gap: 1.5rem;
`


export const Cards = styled.div`
    display: flex;
    flex-direction: column;
    background-color:#141414;
    color: white;
    border: 1px solid transparent;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 450px;
    position: relative;

`
export const Img1 = styled.div`
   width: 95%;
   height: 70%;

`
export const Img2 = styled.div`
   width: 95%;
   height: 30%;

`
export const CardsImg1 = styled.img`
    width: 90%;
    height: 70%;
    overflow: hidden;
    background-size: contain;
`
export const CardsImg2 = styled.img`
    height: 30%;
    overflow: hidden;
`


export const CardsDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height:95% ;
    width: 100%;
    background-color: #23262d ;
    color: black;
    border: 1px solid transparent;
    border-top: 2px solid red;
    justify-content: center;
    align-items: center;
    
`
export const CardsDetailsProfils = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 1rem;

`
export const AavatarText = styled.div`
    display: flex;
    flex-direction: column;
`
export const TextH3 = styled.h3`
  color: white;

`
export const TextP = styled.p`
  color: var(--Menu-color);

`
export const ImgDec = styled.h2`
  color: white;
  position: absolute;
  bottom: 9rem;

`
export const FrindsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
