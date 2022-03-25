import styled from "styled-components";






export const LeftsidbarContainer = styled.div`
    background: #171717;
    height: 100%;
    width: 250px;
    @media screen and (max-width: 900px) {
            display: none;
    }
`

export const Container = styled.div`
    padding: 1rem 0;
    color: white;
    position: fixed;
`

export const Logo = styled.div`
    width: 100%;
    display: flex;
    line-height: 20px;
    text-transform: uppercase;
    padding-left: 2rem;
    
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

export const Button = styled.div`
        
        padding-top: 2rem;  
        padding-left: 2rem;
     

`

export const SocialMedia = styled.div`

`