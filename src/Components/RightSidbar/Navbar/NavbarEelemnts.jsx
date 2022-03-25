import styled from "styled-components";


export const NavbarContainer = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;

   @media screen and (max-width: 840px) {
         grid-template-columns: 1fr 2fr;
   }
`
export const LeftNav = styled.div`
     display: flex;
   justify-content: start;
   align-items: ce;
   column-gap: 1rem;
   padding: 1rem;
  
`
export const RightNav = styled.div`
   display: flex;
   justify-content: center;
   align-items: ce;
   justify-self: flex-end;
   column-gap: 1rem;
   padding: 1rem;

`
export const NavSearchContainer = styled.div`
    @media screen and (max-width: 660px) {
         display: none;
   }
`
export const NavIcons = styled.div`
    font-size: 2rem;
    margin-top: 3px;
    color: #464f54;
    display: flex;
    column-gap: 1rem;
    
`
export const ProfilePic = styled.div`
   
`
export const RightNavText = styled.p`
   margin-top: 8px;
   font-weight: 600;
`
export const NavToggle = styled.div`
   
`
