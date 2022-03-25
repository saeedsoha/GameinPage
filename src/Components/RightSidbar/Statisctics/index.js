import React from 'react'
import { StatisticsContainer, StatisticsLogo, StatisticsColumns, ColumnsItems, ColumnItem, Ptag, Htag, StatisticsGrid, StatisticsImg, Trophy, Text, FlagIcon, ColumnsItems2 } from './StatisticsElements'
import lolLogo from '../../../Images/lolLogo.png'
import TrophyLogo from '../../../Images/Trophy.png'
import TrophyLogoSilver from '../../../Images/TrophySilver.png'
import Flag from '../../../Images/Flag.png'

function Statistics() {
    return (
        <StatisticsContainer id='statistics'>
            <StatisticsGrid>
                <StatisticsImg><StatisticsLogo src={lolLogo} /></StatisticsImg>
                <StatisticsColumns>
                    <ColumnsItems>
                        <ColumnItem>
                            <Ptag> NickName</Ptag>
                            <Htag> Dino</Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Real Name</Ptag>
                            <Htag> Tomi Williams</Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Country</Ptag>
                            <FlagIcon src={Flag}/>
                        </ColumnItem>
                    </ColumnsItems>
                    <ColumnsItems>
                        <ColumnItem>
                            <Ptag> City </Ptag>
                            <Htag> NY City</Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Solo </Ptag>
                            <Htag> Diamond </Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Flex </Ptag>
                            <Htag> Master </Htag>
                        </ColumnItem>
                    </ColumnsItems>
                    <ColumnsItems>
                        <ColumnItem>
                            <Ptag> Winrate</Ptag>
                            <Htag style={{ color: 'var(--theme-color)' }}>  52% </Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Site Rating </Ptag>
                            <Htag> 7.1 </Htag>
                        </ColumnItem>
                        <ColumnItem>
                            <Ptag> Mmost Position</Ptag>
                            <Htag> Assassin </Htag>
                        </ColumnItem>
                    </ColumnsItems>
                    <ColumnsItems2>
                        <ColumnItem>
                            <Trophy src={TrophyLogo}/>
                            <Text>
                                <Htag> Trophys </Htag>
                                <Ptag>  26 </Ptag>
                            </Text>
                        </ColumnItem>
                        <ColumnItem>
                            <Trophy src={TrophyLogo}/>
                            <Text>
                                <Htag>Wins in Rank</Htag>
                                <Ptag>263</Ptag>
                            </Text>
                        </ColumnItem>

                    </ColumnsItems2>
                    <ColumnsItems2>
                        <ColumnItem>
                            <Trophy src={TrophyLogoSilver}/>
                            <Text>
                                <Htag> Prize pool </Htag>
                                <Ptag>  5,000$ </Ptag>
                            </Text>
                        </ColumnItem>
                        <ColumnItem>
                            <Trophy src={TrophyLogoSilver}/>
                            <Text>
                                <Htag> Prize pool  </Htag>
                                <Ptag>  5,000$ </Ptag>
                            </Text>
                        </ColumnItem>

                    </ColumnsItems2>
                </StatisticsColumns>
            </StatisticsGrid>
        </StatisticsContainer>
    )
}

export default Statistics