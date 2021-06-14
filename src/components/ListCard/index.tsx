import React, { FC } from "react";
import styles from "./ListCard.module.scss";
import test from "../../assets/test.jpg";
import ACTIONS from "../../layout/action";
interface ListCardProps {
  dispatch: (action: unknown) => void;
}
const ListCard: FC<ListCardProps> = ({ dispatch }) => {
  return (
    <div
      className={`${styles.list_card} flex flex-row ml-2 flex-1 hover:bg-gray-200 cursor-pointer px-2`}
      onClick={() =>
        dispatch({
          type: ACTIONS.CLICK_FRIEND_CARD,
        })
      }
    >
      <div className={`${styles.img_container}`}>
        <img className={`${styles.img}`} src={test} alt="test" />
      </div>
      <div className={`flex-1 flex flex-col my-2 mx-4 container`}>
        <div className="font-bold text-lg flex-1">金城武</div>
        <div className="text-gray-800 text-sm flex-1">2020-01-01 12:00:00</div>
        <div
          className={`flex-1 truncate overflow-ellipsis  container ${styles.content_container}`}
        >
          我好像有點帥 oeoeuhoruhoecrhueorchoeuo.
        </div>
      </div>
    </div>
  );
};

export default ListCard;
