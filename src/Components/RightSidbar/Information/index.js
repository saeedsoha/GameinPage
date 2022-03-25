import React from 'react'
import { CardBtn, CardH1, CardH3, CardImg, CardP, CardSpan, InfoCards, InforCard, InforCardBg, InformationContainer, LeftSideCard, RightSideCard } from './InformationElements'
import igm1 from '../../../Images/Cardimg1.png'
import igm2 from '../../../Images/Cardimg2.png'
import card1Bg from '../../../Images/Card1Bg.jpg'
import card1Bg2 from '../../../Images/Card1Bg2.jpg'


function Information() {
    return (
        <InformationContainer  id='information'>
            <InfoCards>
                <InforCard style={{backgroundImage: `url(${card1Bg})`, }}>
                    <LeftSideCard>
                        <CardH3>New reality</CardH3>
                        <CardH1>New Impre<span>ssion</span></CardH1>
                        <CardP>Wear Vr Hemlet and start new battle</CardP>
                        <CardBtn>Play Now</CardBtn>
                    </LeftSideCard>
                    <RightSideCard>
                    <CardImg src={igm2}></CardImg>
                    </RightSideCard>
                </InforCard>
                <InforCard style={{backgroundImage: `url(${card1Bg2})`, }}
 >
                    <LeftSideCard>
                        <CardH3>New reality</CardH3>
                        <CardH1>New Impre<span>ssion</span></CardH1>
                        <CardP>Wear Vr Hemlet and start new battle</CardP>
                        <CardBtn>Play Now</CardBtn>
                    </LeftSideCard>
                    <RightSideCard>
                        <CardImg src={igm1} ></CardImg>
                    </RightSideCard>
                </InforCard>
            </InfoCards>
        </InformationContainer>
    )
}

export default Information