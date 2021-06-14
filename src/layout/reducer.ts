import React from "react";
import ACTIONS, { Actions } from "./action";

interface State {
  screen: 'friends-list' | 'chatroom';
}

const defaultState: State = {
  screen: 'chatroom'
}

const reducer: React.Reducer<State, Actions> = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.CLICK_BACK:
      return { screen: 'friends-list' };
    case ACTIONS.CLICK_FRIEND_CARD:
      return { screen: 'chatroom' };
    default:
      return state;
  }

};


export default reducer;

export {
  defaultState,
  reducer
};