import React, { FC } from "react";
import styles from "./FriendList.module.scss";
import ListCard from "./ListCard";
const FriendList: FC = () => {
  return (
    <div className={`${styles.container} flex-1`}>
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
      <ListCard />
    </div>
  );
};

export default FriendList;
