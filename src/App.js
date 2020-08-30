import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth } from "./firebase/firebase.utils.js";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ChatPage from "./pages/chatpage/chatpage.component.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    console.log(currentUser);
    return (
      <div className="App">
        <Switch>
          {currentUser == null ? (
            <Route exact path="/" component={HomePage} />
          ) : (
            <Route exact path="/" component={ChatPage} />
          )}
        </Switch>
      </div>
    );
  }
}

export default App;
