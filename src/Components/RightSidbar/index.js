import React from 'react'
import { HeaderIcon, HeaderText, RightSidbarBackground, RightSidbarContainer } from './RightSidbarElements'
import NavBar from './Navbar'
import HeaderStatus from './HeaderStatus'
import ScrollNav from './ScrollMenu'
import Information from './Information'
import TextHeader from '../TextHeader'
import Statistics from './Statisctics'
import VictoryChart from './VictoryChart'
import HeroCards from './HeroCrads'
import MyFrinds from './MyFriends'
import Footer from './Footer'


function RightSidbar() {
  return (
    <RightSidbarContainer>
      <RightSidbarBackground >
         <NavBar />
        <HeaderText>Online Soon
          <span><br />Bulid your</span>
          <span> team</span>
          <HeaderIcon>See more </HeaderIcon>
        </HeaderText>
      </RightSidbarBackground>

      <HeaderStatus/>
      <ScrollNav/>
      <Information/>
      <TextHeader header='Statistics'  p='Rank/Solo'/>
      <Statistics/>
      <TextHeader header='Victory statistics'  p='Last 30 days'/>
      <VictoryChart/>
      <TextHeader header='Updates'  p='Last 30 days'/>
      <HeroCards/>
      <TextHeader header='My Friends'  p='162'/>
       <MyFrinds/>
      <Footer/>
    </RightSidbarContainer>

  )
}

export default RightSidbar