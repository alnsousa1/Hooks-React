import { useState, useEffect } from "react";

const App = () => {
  //o primeiro valor, ou seja, resourceType é o State em sí e o segundo é a função que usamos para executar o State, no caso, é meio que uma convensão usar set+nomeDoState
  const [resourceType, setResourceType] =useState("posts");

  useEffect(() => {
    console.log("render");
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div style={{ display: "flex", alignItems: "center"}}>
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
};

export default App;