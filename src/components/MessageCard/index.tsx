import React, { FC } from "react";

interface MessageBoxProps {
  msgType: "send" | "Received";
}
const MessageBox: FC<MessageBoxProps> = ({ msgType, children }) => {
  return (
    <section className={`${msgType === "send" && "text-right"} my-4`}>
      <span
        className={`bg-green-300 mx-2 p-2 px-4 rounded shawdow-sm inline-block`}
      >
        {children}
      </span>
    </section>
  );
};

export default MessageBox;
export { MessageBox };
