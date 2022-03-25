import styled from "styled-components";



export const StatisticsContainer = styled.div`
    padding: 1rem;
    margin: 0 2rem;
    background-color:#23262d ;
`
export const StatisticsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 9fr;
    column-gap: 2rem;

    @media screen and (max-width: 960px) {
        grid-template-columns: 1fr 2fr;

    }
    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        row-gap: 2rem;

    }
`
export const StatisticsImg = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
export const StatisticsLogo = styled.img`
    height:100%;
    width: 100%;

`
export const StatisticsColumns = styled.div`
    display:grid;
    grid-template-columns: repeat(5, 1fr);
    
    @media screen and (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 1.5rem;
        column-gap: 2rem;
        align-items: baseline;

    }
    
`
export const ColumnsItems = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     row-gap: 1rem;
 
`
export const ColumnsItems2 = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     row-gap: 1rem;
     @media screen and (max-width: 1300px) {
        display: none;
    }
`


export const ColumnItem = styled.div`
    display: flex;
    column-gap: 1rem;
    align-items: center;

`

export const Ptag = styled.p`
    color: #566367;
`
export const Htag = styled.h5`
    font-weight: 600;
`
export const Trophy = styled.img`
    height: 40px;
    aspect-ratio: 1/1.2;

`
export const FlagIcon = styled.img`
    height: 25px;
    aspect-ratio: 1/1;

`
export const Text = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
