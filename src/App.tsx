import React from "react";
import "./App.css";
import Header from "./components/Header";
import UserResults from "./components/UserResults";
import store from "./redux/createStore";
import * as ReactRedux from "react-redux";
function App() {
  return (
    <ReactRedux.Provider store={store}>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <UserResults />
      </div>
    </ReactRedux.Provider>
  );
}

export default App;
