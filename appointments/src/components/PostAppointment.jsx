import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./PostAppointment.css";
import GetAppointment from "./getAppointment";
const PostAppointment = ({ alert, alreadyBooked }) => {
  const [timeSlots, setTimeSlots] = useState([]);
  // const [isAppointment, setIsAppointment] = useState(false);
  // const [isHalfAnHour, setIsHalfAnHour] = useState(false);
  // const [appId, setAppId] = useState("");

  useEffect(() => {
    const fetchTimes = async () => {
      try {
        const resp = await fetch("http://localhost:3001/appointment");
        if (resp.ok) {
          const data = await resp.json();
          setTimeSlots(data);

          console.log("data------------>", data);
          data.map((d) => console.log("data------------>", d.startDate));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchTimes();
  }, []);
  return (
    <Container>
      <div>
        <>
          <Row className="row">
            <div className="col-12">
              <input type="date" />
              <input type="button" value="submit" />
            </div>
            <br />
            <h5 style={{ textAlign: "center" }}>
              today's available time slots
            </h5>
            <br />
          </Row>
          <Row>
            {timeSlots.map((slot, i) => (
              <GetAppointment
                alreadyBooked={alreadyBooked}
                slotDetails={slot}
                index={i}
                alert={alert}
              />
            ))}
          </Row>
        </>
      </div>
    </Container>
  );
};

export default PostAppointment;
