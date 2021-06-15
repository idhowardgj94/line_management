import React, { FC } from "react";

const MessageBox: FC = () => {
  return (
    <div className="container flex flex-low">
      <input
        className="rounded-xl flex-1 px-1 focus:border-blue-300  focus:outline-none border-2 leading-tight"
        type="text"
        placeholder="please enter message here"
      ></input>
      <button className="w-12 ml-2 px-2 text-white rounded-xl bg-green-500 hover:bg-green-200">
        送出
      </button>
    </div>
  );
};

export default MessageBox;
export { MessageBox };
