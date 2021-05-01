import React, { FC } from "react";
import FriendList from "../components/FriendList";
import styles from "./Layout.module.scss";
export const Layout: FC = ({ children }) => (
  <div className={`${styles.layout}`}>
    <div className={`${styles.navbar}`}>
      <FriendList />
    </div>
    <div className="lg:container m-2 flex-1">{children}</div>
  </div>
);

export default Layout;
