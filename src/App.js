import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component.jsx";
import ChatPage from "./pages/chatpage/chatpage.component.jsx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/chat" component={ChatPage} />
      </Switch>
    </div>
  );
}

export default App;
