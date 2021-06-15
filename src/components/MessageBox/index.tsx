import React, { FC, useContext, useRef } from "react";
import { sendMsg } from "../../api";
import { ChatroomContext } from "../../containers/Chatroom";

const MessageBox: FC = () => {
  const { userId, userName } = useContext(ChatroomContext);
  const input = useRef<HTMLInputElement>(null);
  const submitHandler = (e) => {
    const msg = input.current.value;
    console.log("inside submitHandler");
    console.log(input.current.value, userId, userName);
    sendMsg(msg, userId).then(console.log);
    input.current.value = "";
  };
  return (
    <div className="container flex flex-low">
      <input
        ref={input}
        className="rounded-xl flex-1 px-1 focus:border-blue-300  focus:outline-none border-2 leading-tight"
        type="text"
        placeholder="please enter message here"
      ></input>
      <button
        className="w-12 ml-2 px-2 text-white rounded-xl bg-green-500 hover:bg-green-200"
        onClick={submitHandler}
      >
        送出
      </button>
    </div>
  );
};

export default MessageBox;
export { MessageBox };
