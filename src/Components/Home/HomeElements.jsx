import styled from "styled-components";

export const HomePageContainer= styled.div`

    display: grid;
    grid-template-columns: 1fr 9fr;
    background: #1e1e20;
    height: 3070px;
    color: white;
    /* width: 100vw; */

    @media screen and (max-width: 840px) {
        grid-template-columns: 1fr;
        height: auto;
        width: auto;


    }
`