import { Chat, ChatList } from "./model";


const CHATLIST = "https://lishin-note.com/linebot/api/v1/chatList";
const CHATS = "https://lishin-note.com/linebot/api/v1/chat";
const SEND_MSG = 'https://lishin-note.com/linebot/api/v1/push';

type Response<T> = Promise<T>;

const getChatList = (): Response<ChatList[]> => fetch(CHATLIST).then(j => j.json())

const getChats = (userId): Response<Chat[]> => fetch(`${CHATS}/${userId}`).then(j => j.json());

const sendMsg = (msg, userId): Response<any> => fetch(`${SEND_MSG}`, {
  body: JSON.stringify({
    to: [userId],
    messages: [{
      type: "text",
      text: msg
    }]
  }),
  headers: {
    'content-type': 'application/json'
  },
  method: 'POST'
}).then(j => j.text());

export {
  getChatList,
  getChats,
  sendMsg
};