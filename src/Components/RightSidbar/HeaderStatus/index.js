import React from 'react'
import { GrEdit } from 'react-icons/gr'
import Avatar from '@mui/material/Avatar';
import AvatarPic from '../../../Images/Avatar.jpg'

import { Btn, BtnOutlined, EditProfile, HeaderStatusContainer } from './HeaderStatusElements'

function HeaderStatus() {
    return (
        <HeaderStatusContainer>
            <Avatar alt="Remy Sharp" src={AvatarPic}
                style={{ border: '1px solid black' }}
            />
            <Btn>Stream</Btn>
            <BtnOutlined>Donate</BtnOutlined>
            <EditProfile>
                <GrEdit />
            </EditProfile>

        </HeaderStatusContainer>
    )
}

export default HeaderStatus