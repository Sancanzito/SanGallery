import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import moment from "moment";
import { useState,useEffect } from "react";
const MyNav = () => {

  const [dateTime, setDateTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'));
  useEffect(() => {
    const timerId = setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }, 1000); // Update every second

    return () => clearInterval(timerId); // Cleanup on unmount
  }, []);
    return ( 
      <Nav variant="tabs" defaultActiveKey="/home" className="navbar navbar-expand-lg">
      <Container fluid>
      <Nav className="d-flex align-items-center">
          <Nav.Item>
            <Link to="/home" className="navbar-brand mb-0 h1">Journal</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/home" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to='/message' className="nav-link">Msg</Link>
          </Nav.Item>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Item className="d-none d-md-block">
            <span className="nav-link disabled">{dateTime}</span>
          </Nav.Item>
        </Nav>
      </Container>
    </Nav>
    );
}
export default MyNav;