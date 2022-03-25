import { Avatar } from '@mui/material'
import React from 'react'
import { AavatarText, Cards, CardsDetails, CardsDetailsProfils, CardsImg1, CardsImg2, FrindsContainer, HeroCardsContainer, HeroCardsItems, HeroCardss, Img1, Img2, ImgDec, TextH3, TextP } from './HeroCardsElements'
import Friends from './Friends'

import img1 from '../../../Images/Cards/1.png'
import img2 from '../../../Images/Cards/2.png'
import img3 from '../../../Images/Cards/3.png'
import img4 from '../../../Images/Cards/4.png'
import Skin1 from '../../../Images/Cards/Skin1.png'
import chart1 from '../../../Images/Cards/chart1.svg'
import chart2 from '../../../Images/Cards/chart2.svg'
import chart3 from '../../../Images/Cards/chart3.svg'
import chart4 from '../../../Images/Cards/chart4.svg'
import AvatarLogo from '../../../Images/Avatar.jpg'



function HeroCards() {
    return (
        <HeroCardsContainer id='updates'>
            <HeroCardsItems>
                <HeroCardss>
                    <Cards >
                        <CardsImg1 src={img1} />
                        <ImgDec>New Upgrade</ImgDec>
                        <CardsImg2 src={chart1} />
                    </Cards>
                    <CardsDetails>
                        <CardsDetailsProfils>
                            <Avatar src={AvatarLogo} />
                            <AavatarText>
                                <TextH3>Offensive</TextH3>
                                <TextP>Lorem ipsum Dolor</TextP>
                            </AavatarText>
                        </CardsDetailsProfils>
                        <FrindsContainer>
                            <Friends number={6}/>
                        </FrindsContainer>
                    </CardsDetails>
                </HeroCardss>
                <HeroCardss>
                    <Cards >
                        <CardsImg1 src={img2} />
                        <ImgDec>Titan Killer</ImgDec>
                        <CardsImg2 src={chart2} />
                    </Cards>
                    <CardsDetails>
                        <CardsDetailsProfils>
                            <Avatar src={AvatarLogo} />
                            <AavatarText>
                                <TextH3>Offensive</TextH3>
                                <TextP>Lorem ipsum Dolor</TextP>
                            </AavatarText>
                        </CardsDetailsProfils>
                        <FrindsContainer>
                            <Friends number={20} />
                        </FrindsContainer>
                    </CardsDetails>
                </HeroCardss>
                <HeroCardss>
                    <Cards >
                        <CardsImg1 src={Skin1} />
                        <ImgDec>New Gun</ImgDec>
                        <CardsImg2 src={chart3} />
                    </Cards>
                    <CardsDetails>
                        <CardsDetailsProfils>
                            <Avatar src={AvatarLogo} />
                            <AavatarText>
                                <TextH3>Offensive</TextH3>
                                <TextP>Lorem ipsum Dolor</TextP>
                            </AavatarText>
                        </CardsDetailsProfils>
                        <FrindsContainer>
                            <Friends number={10} />
                        </FrindsContainer>
                    </CardsDetails>
                </HeroCardss>
                <HeroCardss>
                    <Cards >
                        <CardsImg1 src={img4} />
                        <ImgDec>Cyber Attack</ImgDec>
                        <CardsImg2 src={chart4} />
                    </Cards>
                    <CardsDetails>
                        <CardsDetailsProfils>
                            <Avatar src={AvatarLogo} />
                            <AavatarText>
                                <TextH3>Offensive</TextH3>
                                <TextP>Lorem ipsum Dolor</TextP>
                            </AavatarText>
                        </CardsDetailsProfils>
                        <FrindsContainer>
                            <Friends number={16}/>
                        </FrindsContainer>
                    </CardsDetails>
                </HeroCardss>

            </HeroCardsItems>
        </HeroCardsContainer>
    )
}

export default HeroCards