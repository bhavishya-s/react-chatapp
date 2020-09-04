import React from "react";
import { Switch, Route } from "react-router-dom";

import { auth, storeUser } from "./firebase/firebase.utils.js";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await storeUser(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: { id: snapShot.id, ...snapShot.data() },
            },
            () => console.log(this.state.currentUser)
          );
        });
      } else this.setState({ currentUser: null });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
