import React from 'react'
import styled from 'styled-components'

const TextHeaderContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-start;
    column-gap: 2rem;
    align-items: center;
    p{
        margin-top: 5px;
        color: var(--Menu-color);
    }
`


function TextHeader({header, p}) {
  return (
    <TextHeaderContainer>
       <h1>{header}</h1>  
        <p>{p}</p>
    </TextHeaderContainer>
  )
}

export default TextHeader