import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PostList from "./pages/PostList";
import PostDetails from "./pages/PostDetails";
import PostForm from "./pages/PostForm";

// Import Tailwind CSS
import "./index.css"; // <-- Make sure this file has Tailwind directives

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-380">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/create" element={<PostForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
