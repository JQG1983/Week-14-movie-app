import { useContext } from "react";
import Form from "./components/Form";
import CommentItem from "./components/Comment";
import { CommentContext } from "./context/CommentContextProvider";

function App() {
  const {comments} = useContext(CommentContext)
  return (
    <div className="app-container">
      <h1>Post your favorite movie here!</h1>
      <h3>Comment and Vote</h3>
      <Form />
      <ul className="post-items">
        { comments.map((commentData, index) => <CommentItem comment={commentData} key={index} />)}
      </ul>

    </div>
  );
}

export default App;