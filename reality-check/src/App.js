import React from "react";
import "./App.scss";
import GlobalState from "./Global";
import { BrowserRouter, Route } from "react-router-dom";
import Heatmap from "./Pages/region-heatmap";
import Heros from "./Pages/heros";
import TrashTalkPage from "./Pages/trash-talk";
import TrashTalkLocal from "./Pages/trash-talk/trashTalkLocal";
import Landing from "./Pages/landing";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Route exact path="/" component={Landing} />
        <Route path="/heatmap" component={Heatmap} />
        <Route path="/heros" component={Heros} />
        <Route path="/trash-talk" component={TrashTalkPage} />
        <Route path="/trash-talk/local" component={TrashTalkLocal} />
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
