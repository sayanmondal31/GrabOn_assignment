import { useDispatch } from "react-redux";
import Header from "./Component/Header";
import Post from "./Page/Post";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_POSTS" });
  }, []);

  return (
    <>
      <Header />
      <Post />
    </>
  );
}

export default App;
