import React, { FC } from "react";
import styles from "./ListCard.module.scss";
import ACTIONS from "../../layout/action";
import { Chat } from "../../model";
interface ListCardProps {
  dispatch: (action: unknown) => void;
  data: Chat;
}

// TODO 日期...
const ListCard: FC<ListCardProps> = ({ dispatch, data }) => {
  const { userId, userName } = data;
  return (
    <div
      className={`${styles.list_card} flex flex-row ml-2 flex-1 hover:bg-gray-200 cursor-pointer px-2`}
      onClick={() =>
        dispatch({
          type: ACTIONS.CLICK_FRIEND_CARD,
          payload: {
            userId,
            userName,
          },
        })
      }
    >
      <div className={`${styles.img_container}`}>
        <img className={`${styles.img}`} src={data.picture} alt="test" />
      </div>
      <div className={`flex-1 flex flex-col my-2 mx-4 container`}>
        <div className="font-bold text-lg flex-1">{data.userName}</div>
        <div className="text-gray-800 text-sm flex-1">2020-01-01 12:00:00</div>
        <div
          className={`flex-1 truncate overflow-ellipsis  container ${styles.content_container}`}
        >
          {data.text}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
