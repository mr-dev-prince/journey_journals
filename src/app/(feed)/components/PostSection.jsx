import React from "react";
import TopBar from "./TopBar";
import PostCard from "./PostCard";

const PostSection = () => {
  return (
    <div>
      <TopBar />
      <div className="h-full w-full p-3">
        <PostCard />
      </div>
    </div>
  );
};

export default PostSection;
