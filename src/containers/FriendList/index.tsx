import React, { FC } from "react";
import styles from "./FriendList.module.scss";
import ListCard from "../../components/ListCard";
interface FriendListProps {
  dispatch: (action: unknown) => void;
}
const FriendList: FC<FriendListProps> = ({ dispatch }) => {
  return (
    <div className={`${styles.container} flex-1`}>
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
      <ListCard dispatch={dispatch} />
    </div>
  );
};

export default FriendList;
