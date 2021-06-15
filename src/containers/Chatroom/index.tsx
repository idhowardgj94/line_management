import React, { FC } from "react";
import MessageBox from "../../components/MessageBox";
import MessageCard from "../../components/MessageCard";
import ACTIONS from "../../layout/action";
import styles from "./Chatroom.module.scss";
interface ChatroomProps {
  dispatch: (action: unknown) => void;
}

const Chatroom: FC<ChatroomProps> = ({ dispatch }) => {
  return (
    <div className="container relative h-screen">
      <div className={`flex flex-row p-2 ${styles.header_container}`}>
        <button
          onClick={() => dispatch({ type: ACTIONS.CLICK_BACK })}
          className="w-20 self-center text-white my-center font-bold bg-green-500 hover:bg-green-200 h-10 rounded-xl shadow-md"
        >
          回上一頁
        </button>
        <h1 className="flex-1 justify-self-center self-center text-bold text-xl text-center">
          金城武
        </h1>
      </div>
      <main className={`${styles.chatroom_container} p-2 overflow-y-scroll`}>
        <MessageCard msgType="received">hi, how are you</MessageCard>
        <MessageCard msgType="send">fine</MessageCard>
        <MessageCard msgType="send">how about you</MessageCard>
        <MessageCard msgType="received">fine</MessageCard>
      </main>
      <div
        className={`${styles.message_container} p-2 bg-gray-50 flex flex-row`}
      >
        <MessageBox />
      </div>
    </div>
  );
};

export default Chatroom;
export { Chatroom };
