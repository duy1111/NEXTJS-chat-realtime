

import {  Conversation, Message, User } from "@prisma/client";

export type FullMessageType = Message & {
  sender: User, 
  seen: User[]
};

export type FullConversationType = Conversation & { 
  users: User[]; 
  messages: FullMessageType[]
};

export type SafeUser = Omit<
  User,
  "emailVerified" 
> & {
  followersCount:number |null
  emailVerified: string | null;
};
