import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Description from "./components/Description";
import { CssBaseline } from "@material-ui/core";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Copyright from './components/Copyright'
import Home from './components/home'

function App() {
  const counter = {
    count: 0,
    incrementCounter: function() {
      console.log(this);
      this.count++;
    }
  }
counter.incrementCounter()
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        /> */}
        <CssBaseline />
        <Header />
        <Home/>
        <Description />
        <Services />
        <Footer />
        <Copyright />
        
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
