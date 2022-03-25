import styled from "styled-components";


export const FooterContainer = styled.div`
       padding: 3rem;
       background-color:#23262d ;
       margin-top: 10rem;
       display: flex;
       flex-direction: column;

`
export const FooterMenus = styled.div`
        max-width: 1200px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);

        @media screen and (max-width: 840px) {
            grid-template-columns: repeat(4, 1fr);

        }
        
`
export const FooterMenu = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    justify-content: center;
    align-items: center;

`
export const TeaxHeader = styled.h3`
      color: white;
`
export const MenuUl = styled.ul`
      color: white;
`
export const MenuLi = styled.div`
      
`
export const CopyRight = styled.div`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      padding-top: 3rem;
      max-width: 800px;
      align-items: center;
      margin: 0 auto;
      @media screen and (max-width: 480px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
           row-gap: 2rem;
        }
`

export const Text = styled.div`
      
`
export const Icons = styled.div`
      
`

export const Logo = styled.div`
    width: 100%;
    display: flex;
    line-height: 20px;
    text-transform: uppercase;
    padding-left: 2rem;
    @media screen and (max-width: 480px) {
          padding-left: 0;
          width: auto;
        }
    
`
export const LogoImg = styled.img`
    width: 40px;
    height: 40px;
    padding-top: 2px;
`
export const LogoText = styled.div`
    font-size: .8rem;
`
export const LogoT1 = styled.h2`
    color:var(--theme-color) ;
    font-weight: 700;

`
export const LogoT2 = styled.h2`

`

export const SocialIconsContainer = styled.div`
  
  padding-left: 2rem;
  font-size: 2rem;
  display: flex;
  column-gap: .5rem;
  color: var(--Menu-Icon-color);

`