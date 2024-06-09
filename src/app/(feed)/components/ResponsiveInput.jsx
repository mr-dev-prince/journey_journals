'use client'

import React, { useState, useRef, useEffect } from "react";

const PostInput = () => {
  const [content, setContent] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);

  return (
    <div className="max-w-lg">
      <textarea
        ref={textareaRef}
        className="w-full p-2 resize-none focus:border-none focus:outline-none overflow-hidden bg-transparent text-lg "
        placeholder="Share your journey"
        value={content}
        onChange={handleChange}
        rows={1} // Start with one row
      />
    </div>
  );
};

export default PostInput;
