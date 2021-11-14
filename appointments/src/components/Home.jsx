import React from "react";
import { useState } from "react";
import { Col, Container, Row, Navbar, Nav, Alert } from "react-bootstrap";
import PostAppointment from "./PostAppointment";
import { Link, NavLink } from "react-router-dom";
export default function Home() {
  const [isPosted, setIsPosted] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  // const [userId, setUserId] = useState("");
  const alert = () => {
    setIsPosted(true);
  };
  const alertTwo = () => {
    setIsBooked(true);
  };
  setTimeout(() => {
    setIsBooked(false);
  }, 5000);
  // const userBId = (u) => {
  //   setUserId(u);
  // };
  return (
    <div className="fluid-container">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <h5>Home</h5>
            </Link>

            <Link to="/bookings">
              <h5>bookings</h5>
            </Link>

            <h5>Pricing</h5>
          </Nav>
        </Container>
      </Navbar>
      {isPosted && (
        <Alert variant="success">Appointment booked successfully!</Alert>
      )}
      {isBooked && (
        <Alert variant="danger">U already booked this appointment</Alert>
      )}
      <PostAppointment
        // getUserId={setUserId}
        alreadyBooked={alertTwo}
        alert={alert}
      />
    </div>
  );
}
