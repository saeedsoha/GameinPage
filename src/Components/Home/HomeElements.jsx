import styled from "styled-components";

export const HomePageContainer= styled.div`

    display: grid;
    grid-template-columns: 1fr 8fr;
    background: #1e1e20;
    height: 3070px;
    color: white;
    width: auto;

    @media screen and (max-width: 840px) {
        grid-template-columns: 1fr;
        height: 4000px;
        width: auto;


    }
`