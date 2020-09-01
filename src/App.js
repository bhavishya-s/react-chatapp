import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

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

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: auth.currentUser });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    console.log(this.state.currentUser);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              this.state.currentUser ? (
                <ChatPage currentUser={this.state.currentUser} />
              ) : (
                <HomePage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
