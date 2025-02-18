import { Button, Col, FormControl, FormGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { Link } from "react-router";
import { LuNotebookPen } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
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
            {assignments.filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuNotebookPen color="green" className="me-2 fs-3" />
                  <Button className="text-dark bg-white border-white wd-assignment-text-button">
                    <Link key={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      style={{ fontSize: 25 }}>
                      {assignment.title}
                    </Link>
                    <div>
                      <p className="text-left">
                        <span className="text-danger fw-bold">Multiple Modules </span>
                        | <b>Not available until</b> {assignment.available} |
                        <br />
                        <b>Due</b> {assignment.due} | {assignment.points}pts
                      </p>
                    </div>
                  </Button>
                  <LessonControlButtons />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
