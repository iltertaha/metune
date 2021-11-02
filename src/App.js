import React from "react";
import Tuner from "./components/tuner";
import { Store } from "./store/store";
import { Provider } from "react-redux";

import { GlobalContainer } from "./styles/styles.js";

function App(){
  return(
    <Provider store={Store}>
      <GlobalContainer classsName = "App" >
        <Tuner/>
      </GlobalContainer>
    </Provider>
  );
}

export default App;