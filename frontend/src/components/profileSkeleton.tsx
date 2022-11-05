import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Card } from "@material-ui/core";

const ProfileSkeleton = () => {
  return (
    <Card >
      <Skeleton
        width={200}
        height={200}
        variant="circle"
      />

      <div style={{ width: "300px" }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
      </div>
    </Card>
  );
};

export default ProfileSkeleton;
