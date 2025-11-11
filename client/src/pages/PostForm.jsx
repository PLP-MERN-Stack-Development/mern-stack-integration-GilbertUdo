import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postService } from "../services/api";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postService.createPost({ title, content });
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white shadow-lg rounded-2xl p-8 border border-gray-100">
      <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
        Create New Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter your post title"
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none p-3 rounded-lg shadow-sm transition duration-200"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Content</label>
          <textarea
            placeholder="Write your content here..."
            className="w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none p-3 rounded-lg shadow-sm h-48 resize-none transition duration-200"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
