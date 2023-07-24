import axios from "axios";

export const createPostAction = async (payload) => {
  const response = await axios.post("http://localhost:5050/posts", payload);
  return response;
};

export const getPostsAction = async () => {
  const response = await axios.get("http://localhost:5050/posts");
  return response;
};

export const updatepostAction = async (payload) => {
  const response = await axios.patch(
    `http://localhost:5050/posts/${payload.id}`,
    payload.body
  );
  return response;
};

export const deletePostAction = async (payload) => {
  const response = await axios.delete(
    `http://localhost:5050/posts/${payload.id}`
  );
  return response;
};
