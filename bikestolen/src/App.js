import React, { useState, useEffect } from "react";
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";
import axios from "axios";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://bikewise.org:443/api/v2/incidents");
      setPosts(res.data.incidents);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //  Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts && posts.slice(indexOfFirstPost, indexOfLastPost);

  // // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(posts);
  return (
    <div className="container mt-5">
      <center>
        <h1 className="text-primary mb-3">Police Department of Berlin</h1>
        <h2>Stolen Bikes</h2>
        <h2>Total Bikes Stolen : {posts.length}</h2>
      </center>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
