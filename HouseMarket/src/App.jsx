import React from "react";
import Navbars from "./components/Navbar";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Router from "./Router/Router";
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
  return (
    <main>
      <Provider store={store}>
      <Router/>
       
      </Provider>
     
    </main>
  );
}

export default App;
