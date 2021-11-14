import React, { useState } from "react";
import PostAppointment from "./components/PostAppointment";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./components/Home";
import UserBookings from "./components/UserBookings";
function App() {
  return (
    <>
      {/* <Router>
        <Home />
        <Route path="/bookings">
          <UserBookings />
        </Route>
      </Router> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/bookings">
            <UserBookings />
          </Route>
        </Switch>
      </Router>
      {/* <PostAppointment />; */}
    </>
  );
}
export default App;
