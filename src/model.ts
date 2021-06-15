type ObjectId = {
  $oid: string;
}

interface ChatList {
  _id: ObjectId;
  userId: string;
  userName: string;
  lastChat: Chat;
}


interface Chat {
  _id: ObjectId;
  userName: string;
  picture: string;
  type: string;
  userId: string;
  text: string;
}

export type {
  ChatList,
  Chat,
  ObjectId
};