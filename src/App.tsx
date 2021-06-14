/* eslint-disable no-undef */
import React, { FC } from "react";
import { useEffect, useState } from "react";
import Layout from "./layout";

const App: FC = () => {
  const [msg, setMsg] = useState("");
  const liffId = "1655909167-Wdb43gao";
  useEffect(() => {
    // do something here :)
    liff
      .init({
        liffId,
      })
      .then(() => {
        console.log("not bad喔");
      })
      .catch((err) => {
        console.log(err);
        console.log("inside error");
      });

    if (!liff.isLoggedIn()) {
      setMsg("your line is not login!");
    } else {
      setMsg("your line is login!");
    }
  }, []);
  return <Layout />;
};

export default App;
