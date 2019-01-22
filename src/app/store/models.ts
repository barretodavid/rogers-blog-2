export interface Post {
  title: string;
  content: string;
}

export interface Message {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface State {
  posts: Post[];
  messages: Message[];
}
