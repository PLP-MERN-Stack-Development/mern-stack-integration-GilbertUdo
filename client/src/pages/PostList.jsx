import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { postService } from "../services/api";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await postService.getAllPosts();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post._id} className="border p-4 rounded-md">
              <Link to={`/posts/${post._id}`} className="text-xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </Link>
              <p className="text-gray-600 mt-1">{post.content.slice(0, 100)}...</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
