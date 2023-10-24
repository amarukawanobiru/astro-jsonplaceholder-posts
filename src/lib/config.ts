export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export const endpoint = {
  posts: import.meta.env.PUBLIC_JSONPLACEHOLODER_POSTS_API,
  users: import.meta.env.PUBLIC_JSONPLACEHOLODER_USERS_API,
};
