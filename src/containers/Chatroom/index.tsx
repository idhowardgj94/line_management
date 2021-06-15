import React, { createContext, FC, useEffect, useState } from "react";
import { getChats } from "../../api";
import MessageBox from "../../components/MessageBox";
import MessageCard from "../../components/MessageCard";
import ACTIONS from "../../layout/action";
import { State } from "../../layout/reducer";
import { Chat } from "../../model";
import styles from "./Chatroom.module.scss";
interface ChatroomProps {
  dispatch: (action: unknown) => void;
  state: State;
}

const defaultContext = {
  userId: "",
  userName: "",
};
const ChatroomContext = createContext(defaultContext);

// TODO refresh
const Chatroom: FC<ChatroomProps> = ({ dispatch, state }) => {
  const { userId, userName } = state;
  const [chats, setChats] = useState<Chat[]>([]);

  console.log(userId);
  useEffect(() => {
    if (userId === "") {
      return;
    }
    getChats(userId).then(setChats);
  }, [userId]);

  if (userId === "") {
    return (
      <div className="container relative h-screen">
        <div className={`flex flex-row p-2 ${styles.header_container}`}>
          <button
            onClick={() => dispatch({ type: ACTIONS.CLICK_BACK })}
            className="w-20 self-center text-white my-center font-bold bg-green-500 hover:bg-green-200 h-10 rounded-xl shadow-md"
          >
            回上一頁
          </button>
        </div>
        <main className={`${styles.chatroom_container} p-2 overflow-y-scroll`}>
          請選擇聊天內容
        </main>
        <div
          className={`${styles.message_container} p-2 bg-gray-50 flex flex-row`}
        >
          <MessageBox />
        </div>
      </div>
    );
  }

  return (
    <ChatroomContext.Provider
      value={{
        userId,
        userName,
      }}
    >
      <div className="container relative h-screen">
        <div className={`flex flex-row p-2 ${styles.header_container}`}>
          <button
            onClick={() => dispatch({ type: ACTIONS.CLICK_BACK })}
            className="w-20 self-center text-white my-center font-bold bg-green-500 hover:bg-green-200 h-10 rounded-xl shadow-md"
          >
            回上一頁
          </button>
          <h1 className="flex-1 justify-self-center self-center text-bold text-xl text-center">
            {userName}
          </h1>
        </div>
        <main className={`${styles.chatroom_container} p-2 overflow-y-scroll`}>
          {chats.map((chat) => (
            <MessageCard msgType={chat.type as "Received"} key={chat._id.$oid}>
              {chat.text}
            </MessageCard>
          ))}
        </main>
        <div
          className={`${styles.message_container} p-2 bg-gray-50 flex flex-row`}
        >
          <MessageBox />
        </div>
      </div>
    </ChatroomContext.Provider>
  );
};

export default Chatroom;
export { Chatroom, ChatroomContext };
