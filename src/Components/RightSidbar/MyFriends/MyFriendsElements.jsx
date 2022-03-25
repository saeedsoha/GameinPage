import styled from "styled-components";


export const MyFriendsContainer = styled.div`
       padding: 2rem;
       margin: 0 2rem;
       background-color:#23262d ;

`
export const AvatarGRPs = styled.div`
    display: flex;
    
    
    @media screen and (max-width: 1150px) {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 2rem;
        }
        @media screen and (max-width: 480px) {
            display: none;
        }
`
export const FrindsMobile = styled.div`
        display: none;
    @media screen and (max-width: 480px) {
            display: flex;
        }
`
export const Online = styled.div`  
        display: flex;
`
export const Offline = styled.div`
        display: flex;
  @media screen and (max-width: 480px) {
            display: none;
        }
`

export const AvatarGrp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const AvatarText = styled.div`
    color: var(--Menu-color);

`
