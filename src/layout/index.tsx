import React, { FC, useReducer } from "react";
import Chatroom from "../containers/Chatroom";
import FriendList from "../containers/FriendList";
import styles from "./Layout.module.scss";
import reducer, { defaultState } from "./reducer";

export const Layout: FC = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const { screen } = state;
  return (
    <div className={`${styles.layout}`}>
      <div
        className={`${styles.navbar} md:block ${
          screen === "chatroom" && "hidden"
        }`}
      >
        <FriendList dispatch={dispatch} />
      </div>
      <div
        className={`${screen === "friends-list" && "hidden"} md:block flex-1`}
      >
        <Chatroom dispatch={dispatch} />
      </div>
    </div>
  );
};

export default Layout;
