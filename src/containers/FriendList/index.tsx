import React, { FC, useEffect, useState } from "react";
import styles from "./FriendList.module.scss";
import ListCard from "../../components/ListCard";
import { ChatList } from "../../model";
import { getChatList } from "../../api";
interface FriendListProps {
  dispatch: (action: unknown) => void;
}

const FriendList: FC<FriendListProps> = ({ dispatch }) => {
  const [data, setData] = useState<ChatList[]>([]);
  useEffect(() => {
    getChatList().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div className={`${styles.container} flex-1`}>
      {data.map((it) => (
        <ListCard key={it._id.$oid} dispatch={dispatch} data={it.lastChat} />
      ))}
    </div>
  );
};

export default FriendList;
