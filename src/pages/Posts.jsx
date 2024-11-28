import { useEffect, useState } from "react";
import axios from "axios";
import Story from "../../components/Story/Story";
import Post from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/posts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex mt-20 p-3 flex-wrap gap-2">
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      {/* Posts */}
      <div className="flex flex-wrap justify-center gap-5 mt-20">
        {/* Posts inserted here */}
        {posts?.map((post, index) => {
          return <Post key={index} {...post}  />;
        })}
      </div>
    </>
  );
}

export default Posts;
