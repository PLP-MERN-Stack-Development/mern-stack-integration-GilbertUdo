import axios from "axios";

const API_URL = "http://localhost:5000/api/posts";

export const postService = {
  getAllPosts: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  createPost: async (postData) => {
    const response = await axios.post(API_URL, postData);
    return response.data;
  },
};
