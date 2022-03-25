import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import friendsimg1 from '../../../Images/Friends/1.jpg'
import friendsimg2 from '../../../Images/Friends/2.jpg'
import friendsimg3 from '../../../Images/Friends/3.jpg'
import friendsimg4 from '../../../Images/Friends/4.jpg'

export default function Friends(props) {
  return (
    <AvatarGroup total={props.number}>
      <Avatar alt="Remy Sharp" src={friendsimg1} />
      <Avatar alt="Remy Sharp" src={friendsimg2} />
      <Avatar alt="Remy Sharp" src={friendsimg3} />
      <Avatar alt="Remy Sharp" src={friendsimg4} />
    </AvatarGroup>
  );
}