import { Button, Col, FormControl, FormGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { LuNotebookPen } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { setAssignments, deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  function formatDate(dateString: string): string {
    const date = new Date(dateString + "T12:00:00");
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  }
  function generateNewAID(): any {
    const aidList = assignments.map((assignment: any) => assignment._id)
    let newAID: any;
    do {
      newAID = "A" + (Math.floor(Math.random() * (999 - 100 + 1)) + 100);
    } while (aidList.includes(newAID))
    return newAID;
  }
  const routeToNew = (aid: any) => {
    const pathTo = `/Kambaz/Courses/${cid}/Assignments/${aid}`;
    navigate(pathTo);
  }
  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
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
            {currentUser.role === "FACULTY" &&
              <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
                onClick={() => routeToNew(generateNewAID())}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
              </Button>
            }
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
            {assignments
              .map((assignment: any) => (
                <ListGroup.Item className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuNotebookPen color="green" className="me-2 fs-3" />
                  <Button className="text-dark bg-white border-white wd-assignment-text-button">
                    <Link key={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      to={
                        currentUser.role === "FACULTY" ? `/Kambaz/Courses/${cid}/Assignments/${assignment._id}`
                          : `/Kambaz/Courses/${cid}/Assignments`
                      }
                      className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      style={{ fontSize: 25 }}>
                      {assignment.title}
                    </Link>
                    <div>
                      <p className="text-left">
                        <span className="text-danger fw-bold">Multiple Modules </span>
                        | <b>Not available until</b> {formatDate(assignment.availableFromDate)} at 12:00am |
                        <br />
                        <b>Due</b> {formatDate(assignment.dueDate)} at 11:59pm | {assignment.points}pts
                      </p>
                    </div>
                  </Button>
                  <AssignmentControlButtons
                    assignmentId={assignment._id}
                    deleteAssignment={(assignmentId) => {
                      removeAssignment(assignmentId);
                    }} />
                </ListGroup.Item>
              ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
