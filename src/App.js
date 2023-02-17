import * as React from "react";
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
>>>>>>> origin/features
import Header from "./components/Header";
import Description from "./components/Description";
import { CssBaseline } from "@material-ui/core";
import Services from "./components/Services";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Copyright from './components/Copyright'
import Home from './components/home'
=======
import Copyright from "./components/Copyright";
import ServicesPage from "./pages/ServicesPage";
>>>>>>> origin/features

function App() {
  const counter = {
    count: 0,
<<<<<<< HEAD
    incrementCounter: function() {
      console.log(this);
      this.count++;
    }
  }
counter.incrementCounter()
=======
    incrementCounter: function () {
      console.log(this);
      this.count++;
    },
  };
  counter.incrementCounter();
>>>>>>> origin/features
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        /> */}
        <CssBaseline />
        <Header />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <React.Fragment>
                {" "}
                <Description />
              </React.Fragment>
            }
          ></Route>

          {/* <Route path='service' element={<ServicesPage />}></Route> */}
        </Routes>
        <Services />
        <Footer />
        {/* <Copyright /> */}
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
