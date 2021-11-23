import React, { useState, useEffect } from "react";
import { putAppointment, postApp, getUser } from "../utils/fetches";
import { Modal, Button, Alert } from "react-bootstrap";

const GetAppointment = ({ slotDetails, alert, index, alreadyBooked }) => {
  const [appointment, setAppointment] = useState([]);
  const [isApp, setIsApp] = useState(false);
  const handleClose = () => setIsApp(false);
  const handleShow = () => setIsApp(true);
  const [user, setUser] = useState([]);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);
  const userIndex = user?.bookings?.map((u, i) => user.bookings[i]._id);
  console.log("ussserrrr", userIndex);

  console.log("userBookingdetailssssss", slotDetails[index]);

  useEffect(() => {
    userBookings();
  }, []);
  const userBookings = async () => {
    try {
      const resp = await getUser();
      if (resp) {
        console.log("userObject:", resp);
        setUser(resp);
      }
    } catch (error) {}
  };
  const getApp = async () => {
    const userIndex = user?.bookings?.map((u, i) => user.bookings[i]._id);
    console.log("userIndex:", userIndex);
    try {
      if (userIndex.includes(slotDetails._id)) {
        console.log("already booked");

        alreadyBooked();
      } else {
        const resp = await putAppointment(slotDetails._id);
        if (resp) {
          setAppointment(resp);
          // console.log(slotDetails[index]._id);
          // handleShow();
          setIsApp(true);
        } else {
          console.log("something went wrong");
        }
      }

      // setIsApp(true);
    } catch (error) {}
  };
  const handlePost = async () => {
    console.log("appointment initiated");
    try {
      const resp = await postApp(slotDetails._id);
      if (resp) {
        handleClose();
        userBookings();
        alert();
        setIsAlreadyBooked(true);
      } else {
        console.log("something went wrong");
      }
    } catch (error) {}
  };
  return (
    <>
      {/* {isPosted && <AppDetails isPosted={isPosted} />} */}
      <Button disabled={isAlreadyBooked} className="col-2" onClick={getApp}>
        {slotDetails.startTime}-{slotDetails.endTime}
      </Button>
      {isApp && (
        <Modal show={isApp} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please conform Your Booking</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{`your appointment start time is ${appointment?.startTime}`}</p>
            <p>{`your appointment end time is ${appointment?.endTime}`}</p>
            <p>{`your appointment Date is ${appointment?.startDate}`}</p>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>
            <Button onClick={handlePost} variant="primary">
              Book
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default GetAppointment;
