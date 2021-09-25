import { Row, Col } from "react-bootstrap";
import "./PostAppointment.css";
const PostAppointment = () => {
  return (
    <div>
      <div className="container">
        <div className="col-12">
          <input type="date" />
          <input type="button" value="submit" />
        </div>
        <br />
        <h5 style={{ textAlign: "center" }}>available time slots</h5>
        <br />
        <Row className="row">
          <Col className="col-2">8:00</Col>
          <Col className="col-2">9:00</Col>
          <Col className="col-2">10:00</Col>
          <Col className="col-2">11:00</Col>
          <Col className="col-2">12:00</Col>
          <Col className="col-2">1:00</Col>
          <Col className="col-2">2:00</Col>
        </Row>
      </div>
    </div>
  );
};

export default PostAppointment;
