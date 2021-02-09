import logo from "./logo.svg";
import "./App.css";
import UserContainer from "./components/UserContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import PostContainer from "./components/PostContainer";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContainer />
        {/* <PostContainer /> */}
      </Provider>
    </div>
  );
}

export default App;
