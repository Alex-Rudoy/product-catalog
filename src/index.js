import Axios from "axios";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingIcon from "./components/LoadingIcon/LoadingIcon";
import Home from "./components/Page/Home/Home";
import "./main.scss";
import DispatchContext from "./reducer/DispatchContext";
import { Reducer } from "./reducer/Reducer";
import StateContext from "./reducer/StateContext";
import * as serviceWorker from "./serviceWorker";

Axios.defaults.baseURL = "http://smktesting.herokuapp.com/api/";

function Main() {
  const initialState = {};

  const [state, dispatch] = useImmerReducer(Reducer, initialState);

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="wrapper">
            <BrowserRouter>
              <Header />
              <Suspense fallback={<LoadingIcon />}>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  {/*fallback route*/}
                  <Route>
                    <Home />
                  </Route>
                </Switch>
              </Suspense>
              <Footer />
            </BrowserRouter>
          </div>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
