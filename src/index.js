import Axios from "axios";
import React, { Suspense, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import Login from "./components/AuthModal/Login/Login";
import Register from "./components/AuthModal/Register/Register";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoadingIcon from "./components/LoadingIcon/LoadingIcon";
import CategoryPage from "./components/Page/CategoryPage/CategoryPage";
import Error404 from "./components/Page/Error404/Error404";
import Home from "./components/Page/Home/Home";
import ProductPage from "./components/Page/ProductPage/ProductPage";
import "./main.scss";
import DispatchContext from "./reducer/DispatchContext";
import { Reducer } from "./reducer/Reducer";
import StateContext from "./reducer/StateContext";
import * as serviceWorker from "./serviceWorker";

Axios.defaults.baseURL = "https://smktesting.herokuapp.com/api/";

function Main() {
  const initialState = {
    loggedIn: Boolean(localStorage.getItem("token")),
    user: {
      // todo - remove test data
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
    },
    isAuthModalOpen: false,
    modalTab: "login",
    isSettingsPopupOpen: false,
  };

  const [state, dispatch] = useImmerReducer(Reducer, initialState);

  useEffect(() => {
    localStorage.setItem("token", state.user.token);
    localStorage.setItem("username", state.user.username);
    // eslint-disable-next-line
  }, [state.loggedIn]);

  function closeSettingsPopup() {
    if (state.isAuthModalOpen || state.isSettingsPopupOpen) dispatch({ type: "closeSettingsPopup" });
  }

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <div className="wrapper" onClick={closeSettingsPopup}>
            <BrowserRouter>
              <Header />
              <Suspense fallback={<LoadingIcon />}>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/category/:id" exact>
                    <CategoryPage />
                  </Route>
                  <Route path="/product/:id" exact>
                    <ProductPage />
                  </Route>
                  {/*fallback route*/}
                  <Route>
                    <Error404 />
                  </Route>
                </Switch>
              </Suspense>
              <Footer />
            </BrowserRouter>
            {state.isAuthModalOpen && state.modalTab === "login" ? <Login /> : ""}
            {state.isAuthModalOpen && state.modalTab === "register" ? <Register /> : ""}
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
