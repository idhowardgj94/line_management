import React, { FC } from "react";
import styles from "./FriendList.module.scss";
import test from "../../assets/test.jpg";
const ListCard: FC = () => {
  return (
    <div className={`${styles.list_card} flex flex-row ml-2 flex-1`}>
      <div className={`${styles.img_container}`}>
        <img className={`${styles.img}`} src={test} alt="test" />
      </div>
      <div
        className={`flex-1 flex flex-col my-2 mx-4 ${styles.content_container}`}
      >
        <div className="font-bold text-lg flex-1">金城武</div>
        <div className="text-gray-800 text-sm flex-1">2020-01-01 12:00:00</div>
        <div className="flex-1 truncate overflow-ellipsis">
          我好像有點帥 oeoeuhoruhoecrhueorchoeuo.
        </div>
      </div>
    </div>
  );
};

export default ListCard;
