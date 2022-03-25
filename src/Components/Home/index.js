import React from 'react'
import LeftSidbar from '../LeftSidbar'
import RightSidbar from '../RightSidbar'
import { HomePageContainer } from './HomeElements'

function HomePage() {
  return (
    <HomePageContainer>
            <LeftSidbar/>
            <RightSidbar/>
    </HomePageContainer>
  )
}

export default HomePage