import styled from "styled-components";


export const HeaderStatusContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;
    align-items: center;
    column-gap: 1rem;

    @media screen and (max-width: 480px) {
           /* display: none; */
    }
    
`
export const Btn = styled.button`
    width: 100px;
    height: 40px;
    background-color: #30373f;
    border: 1px solid transparent;
    box-shadow: 0 1px 5px black ;
    color: white;
    font-weight: 700;
    cursor: pointer;
    &:hover{
        background-color: var(--theme-color);
    }
`
export const BtnOutlined = styled.button`
      width: 100px;
    height: 40px;
    background-color: transparent;
    border: 1px solid var(--Menu-color);
    box-shadow: 0 1px 1px black ;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: var(--theme-color);
    }
`
export const EditProfile = styled.button`
    width: 40px;
    height: 40px;
    background-color: #30373f;
    border: 1px solid transparent;
    box-shadow: 0 1px 1px black ;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover{
        background-color: var(--theme-color);
    }
`
