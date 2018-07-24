import React from "react";
import ReactDOM from "react-dom";
import solution from "./solution";

import "./styles.css";

const Link = ({ url, children }) => <a href={url}>{children}</a>;
const Avatar = ({ src }) => <img style={{ width: "150px" }} src={src} />;
const TextComp = ({ children }) => <p> {children} </p>;
const NameComp = ({ children }) => (
  <TextComp>
    {" "}
    <b>{children}</b>{" "}
  </TextComp>
);

const MessageComp = ({ user, children }) => (
  <div>
    <Avatar src={user.url} />
    <div>
      <NameComp> {user.username} </NameComp>
      <TextComp> {user.textbody} </TextComp>
    </div>
  </div>
);

function App() {
  return (
    <div className="App">
      <MessageComp
        user={{
          url: "http://weknowyourdreams.com/images/demons/demons-01.jpg",
          username: "Niklas Jørgensen",
          textbody: "Nu sker der squ noget"
        }}
      >
        {" "}
      </MessageComp>

      <MessageComp
        user={{
          url:
            "https://vignette.wikia.nocookie.net/lovecraft/images/c/cf/Screenshot_20171018-093500.jpg/revision/latest?cb=20171020174137",
          username: "Duklas Regensen",
          textbody: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn"
        }}
      >
        {" "}
      </MessageComp>

      <hr />

      {solution}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
