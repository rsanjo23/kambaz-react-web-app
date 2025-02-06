import { Button, Col, FormControl, FormGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Link } from "react-router";
import { LuNotebookPen } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    <div>
      <FormGroup as={Row} className="me-1">
        <Col sm={1}>
          <FaMagnifyingGlass />
        </Col>
        <Col sm={5}>
          <FormControl type="email" placeholder="Search for Assignments" id="wd-search-assignment" />
        </Col>
        <Col sm={6}>
          <FormGroup as={Col}>
            <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Assignment
            </Button>
            <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group">
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Group
            </Button>
          </FormGroup>
        </Col>
      </FormGroup>
      <br /><br /><br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS 40% of Total
            <div className="float-end">
              <Button className="rounded-pill text-dark bg-secondary border-dark">
                40% of Total
              </Button>
              <BsPlus className="fs-1" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen color="green" className="me-2 fs-3" />
              <Button className="text-dark bg-white border-white wd-assignment-text-button">
                <Link to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  style={{ fontSize: 25 }}>
                  A1 - ENV + HTML
                </Link>
                <div>
                  <p className="text-left">
                    <span className="text-danger fw-bold">Multiple Modules </span>
                    | <b>Not available until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100pts
                  </p>
                </div>
              </Button>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen color="green" className="me-2 fs-3" />
              <Button className="text-dark bg-white border-white wd-assignment-text-button">
                <Link to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  style={{ fontSize: 25 }}>
                  A2 - CSS + BOOTSTRAP
                </Link>
                <div>
                  <p className="text-left">
                    <span className="text-danger fw-bold">Multiple Modules </span>
                    | <b>Not available until</b> May 13 at 12:00am |
                    <br />
                    <b>Due</b> May 20 at 11:59pm | 100pts
                  </p>
                </div>
              </Button>
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />
              <LuNotebookPen color="green" className="me-2 fs-3" />
              <Button className="text-dark bg-white border-white wd-assignment-text-button">
                <Link to="/Kambaz/Courses/1234/Assignments/123"
                  className="wd-assignment-link text-decoration-none text-dark fw-bold"
                  style={{ fontSize: 25 }}>
                  A3 - JAVASCRIPT + REACT
                </Link>
                <div>
                  <p className="text-left">
                    <span className="text-danger fw-bold">Multiple Modules </span>
                    | <b>Not available until</b> May 20 at 12:00am |
                    <br />
                    <b>Due</b> May 27 at 11:59pm | 100pts
                  </p>
                </div>
              </Button>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
