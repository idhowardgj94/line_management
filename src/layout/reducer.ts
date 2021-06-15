import React from "react";
import { Chat } from "../model";
import ACTIONS, { Actions } from "./action";

interface State {
  screen: 'friends-list' | 'chatroom';
  userId: string;
  userName: string;
}

const defaultState: State = {
  screen: 'friends-list',
  userId: '',
  userName: '',
}

const reducer: React.Reducer<State, Actions> = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.CLICK_BACK:
      return { ...state, ...payload, screen: 'friends-list' };
    case ACTIONS.CLICK_FRIEND_CARD:
      return { ...state, ...payload, screen: 'chatroom' };
    default:
      return state;
  }

};


export default reducer;
export type {
  State
};
export {
  defaultState,
  reducer
};