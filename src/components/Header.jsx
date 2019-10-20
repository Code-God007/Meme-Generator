import React from "react";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <img
          style={{ width: "120px", height: "100px" }}
          src="https://www.meme-arsenal.com/memes/8e136806548ce81a0869050cf1b82632.jpg"
          alt=""
        />
        <span className="display-4 ml-5" style={{ color: "#fff" }}>
          MEME GENERATOR
        </span>
      </nav>
    </div>
  );
}
