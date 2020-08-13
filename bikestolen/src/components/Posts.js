import React, { useState, useEffect } from "react";

const Posts = ({ posts, loading }) => {
  const [search, setSearch] = useState("");

  const filteredList = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }
  console.log(posts);

  return (
    <div>
      <div class="mb-4">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="list-group mb-4">
        {filteredList &&
          filteredList.map((post) => (
            <li key={post.id} className="list-group-item">
              <div>Title : {post.title}</div>
              <div>Description : {post.description}</div>
              <div>Address : {post.address}</div>
              <div>Image : </div>

              {post.media.image_url != "null" ? (
                <img
                  src={post.media.image_url}
                  alt="this is car image"
                  width="304"
                  height="236"
                />
              ) : (
                " "
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Posts;
