import React from "react";

const App = () => {
  return (
    <>
      <MyName />
      <h1>Hello world</h1>;<p>Awesome</p>
      <img src="" alt="" />
    </>
  );
};

const MyName = () => {
  return <h1>Hello Rajbir</h1>;
};

// const App = () => {
//   return React.createElement("h1", {}, "Hello World");
// };

export default App;
