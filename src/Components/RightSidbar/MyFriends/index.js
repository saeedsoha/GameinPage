import { Avatar } from '@mui/material'
import React from 'react'
import { AvatarGrp, AvatarGRPs, AvatarText, FrindsMobile, MyFriendsContainer, Offline, Online } from './MyFriendsElements'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import img1 from '../../../Images/Friends/1.jpg'
import img2 from '../../../Images/Friends/2.jpg'
import img3 from '../../../Images/Friends/3.jpg'
import img4 from '../../../Images/Friends/4.jpg'
import img5 from '../../../Images/Friends/5.jpg'
import img6 from '../../../Images/Friends/6.jpg'
import img7 from '../../../Images/Friends/7.jpg'
import img8 from '../../../Images/Friends/8.jpg'
import img9 from '../../../Images/Friends/9.jpg'
import img10 from '../../../Images/Friends/10.jpg'
import img11 from '../../../Images/Friends/11.jpg'
import img12 from '../../../Images/Friends/12.jpg'
import img13 from '../../../Images/Friends/13.jpg'
import img14 from '../../../Images/Friends/14.jpg'
import img15 from '../../../Images/Friends/15.jpg'
import Friends from '../HeroCrads/Friends';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));


function MyFrinds() {
    return (
        <MyFriendsContainer id='friends'>
            <FrindsMobile>
                <Friends number={20} />
            </FrindsMobile>
            <AvatarGRPs>
                <Online>
                <AvatarGrp>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={img1} sx={{ width: 80, height: 80 }} />
                    </StyledBadge>
                    <AvatarText>Robert</AvatarText>
                    <AvatarText>Thmale</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={img12} sx={{ width: 80, height: 80 }} />
                    </StyledBadge>
                    <AvatarText>Matt</AvatarText>
                    <AvatarText>Droger</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={img13} sx={{ width: 80, height: 80 }} />
                    </StyledBadge>
                    <AvatarText>Jesicca</AvatarText>
                    <AvatarText>Lee</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={img14} sx={{ width: 80, height: 80 }} />
                    </StyledBadge>
                    <AvatarText>Peter</AvatarText>
                    <AvatarText>Dram</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar src={img15} sx={{ width: 80, height: 80 }} />
                    </StyledBadge>
                    <AvatarText>Matio</AvatarText>
                    <AvatarText>anderson</AvatarText>
                </AvatarGrp>
                </Online>
                <Offline>
                <AvatarGrp>
                    <Avatar src={img7} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Alexandra</AvatarText>
                    <AvatarText>toom</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img8} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Diana</AvatarText>
                    <AvatarText>Tim</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img9} sx={{ width: 80, height: 80 }} />
                    <AvatarText>JOJO</AvatarText>
                    <AvatarText>kilo</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img10} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Alex</AvatarText>
                    <AvatarText>solol</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img11} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Fiy</AvatarText>
                    <AvatarText>geroger</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img2} sx={{ width: 80, height: 80 }} />
                    <AvatarText>sam</AvatarText>
                    <AvatarText>potin</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img3} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Nadine</AvatarText>
                    <AvatarText>Komi</AvatarText>
                </AvatarGrp>
                <AvatarGrp>
                    <Avatar src={img4} sx={{ width: 80, height: 80 }} />
                    <AvatarText>Baby</AvatarText>
                    <AvatarText>Yoda</AvatarText>
                </AvatarGrp>
                </Offline>
            </AvatarGRPs>
        </MyFriendsContainer>
    )
}

export default MyFrinds