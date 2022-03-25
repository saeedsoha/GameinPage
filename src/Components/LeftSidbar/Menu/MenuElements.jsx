import styled from "styled-components";


export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
`
export const MenuItems = styled.div`
    display: flex;

    gap: 1rem;
    justify-items: center;
    padding: .5rem 0;
    padding-left: 2rem;
    color: var(--Menu-color);
    cursor: pointer;
    &:hover{
    color: var(--theme-color);
    background-color:var( --hover-menu) ;
   }
    &:hover{
            a{
                color: var(--theme-color);
        }
   }
    
`
export const Icon = styled.div`
 background-image: white;

`
export const LinkItems = styled.div`
 a{
     text-decoration: none;
     color: var(--Menu-color);

   }

`
