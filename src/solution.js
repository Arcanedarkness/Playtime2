import React from "react";

const Avatar = ({ src }) => <img style={{ width: "150px" }} src={src} />;
const Text = ({ children }) => <p>{children}</p>;
const Name = ({ children }) => (
  <Text>
    <b>{children}</b>
  </Text>
);

const Message = ({ user, text }) => (
  <div style={{ display: "flex", height: "200px", padding: "10px 0px" }}>
    <Avatar src={user.avatar} />
    <div style={{ flexDirection: "column" }}>
      <Name>{user.name}</Name>
      <Text>{text}</Text>
    </div>
  </div>
);

const solution = (
  <div>
    <h1 style={{ color: "red" }}>Snow Crash</h1>
    <Message
      user={{
        avatar:
          "https://i.pinimg.com/originals/9e/06/37/9e0637b8617294c5bb3a38b3cb3fb438.jpg",
        name: "Hiro Protagonist"
      }}
      text="When you are wrestling for possession of a sword, the man with the handle always wins."
    />
    <Message
      user={{
        avatar:
          "https://pre00.deviantart.net/5c81/th/pre/i/2013/072/3/2/chloe_moretz_as_yt__snow_crash_movie_by_ariokh-d5xz11m.jpg",
        name: "Y.T."
      }}
      text="See, the world is full of things more powerful than us. But if you know how to catch a ride, you can go places,"
    />
  </div>
);

export default solution;
