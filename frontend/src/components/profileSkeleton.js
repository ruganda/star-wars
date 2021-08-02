import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Card } from '@material-ui/core';

// this componet is a Loading state for ProfileDetails
// it uses  <Skeleton> component 

const ProfileSkeleton =({classes}) => {
  return(
    <Card className={classes.root}>
    <Skeleton width={200} height={200} variant="circle" className={classes.Avatar}/>

    <div style={{width: '300px'}}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </div>

    </Card>

  );
}

export default ProfileSkeleton;