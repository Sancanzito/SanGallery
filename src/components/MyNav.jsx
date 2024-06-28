import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import moment from "moment";
import NavDropdown from 'react-bootstrap/NavDropdown';
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
      <NavDropdown title="main" id="basic-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/home" className="nav-link">Home</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to='/message' className="nav-link">Msg</Link>
          </NavDropdown.Item>
      </NavDropdown>

          <NavDropdown title="CQuestions" id="basic-nav-dropdown">
            <NavDropdown.Item>
            <Link to='/Questionlist' className="nav-link">QuestionList</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to='/AddQuestion' className="nav-link">AddQuestion</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to='/Test' className="nav-link">Test</Link>
            </NavDropdown.Item>
            </NavDropdown>

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