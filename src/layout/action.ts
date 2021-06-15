const ACTIONS = {
  CLICK_FRIEND_CARD: 'CLICK_FRIEND_CARD',
  CLICK_BACK: 'CLICK_BACK'
};

type Actions = {
  type: string,
  payload: Record<string, any>,
};

export default ACTIONS;
export type { Actions };
export {
  ACTIONS
};