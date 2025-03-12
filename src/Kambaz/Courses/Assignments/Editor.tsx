import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { addAssignment, updateAssignment, } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignment = useSelector((state: any) => state.assignmentsReducer.assignments)
    .find((assignment: any) => assignment._id === aid);
  const [assignmentData, setAssignmentData] = useState({
    _id: aid,
    title: assignment?.title,
    description: assignment?.description,
    course: cid,
    availableFromDate: assignment?.availableFromDate,
    availableUntilDate: assignment?.availableUntilDate,
    dueDate: assignment?.dueDate,
    points: assignment?.points,
  });
  const routeBack = () => {
    const pathBack = `/Kambaz/Courses/${cid}/Assignments/`;
    navigate(pathBack);
  }
  const addOrUpdate = () => {
    if (assignment) {
      dispatch(updateAssignment(assignmentData));
    }
    else {
      dispatch(addAssignment(assignmentData));
    }
    routeBack();
  }
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue={assignment?.title}
          onChange={(e) =>
            setAssignmentData({ ...assignmentData, title: e.target.value })
          } />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-description">
        <FormControl as="textarea" rows={5}
          onChange={(e) =>
            setAssignmentData({ ...assignmentData, description: e.target.value })
          }>
          {assignment?.description}
        </FormControl>
      </FormGroup>
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={3} align="right">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control defaultValue={assignment?.points}
            onChange={(e) =>
              setAssignmentData({ ...assignmentData, points: e.target.value })
            } />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-group">
        <Form.Label column sm={3} align="right">
          Assignment Group
        </Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option>ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
        <Form.Label column sm={3} align="right">
          Display Grade as
        </Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option>Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
        <Form.Label column sm={3} align="right">
          Submission Type
        </Form.Label>
        <Col sm={9} className="border rounded border-gray">
          <Form.Select className="mt-3">
            <option>Online</option>
          </Form.Select>
          <Form.Label className="mt-3 fw-bold" align="right">
            Online Entry Options
          </Form.Label>
          <Form.Group className="mb-4">
            <Form.Check id="wd-text-entry" name="check-entry-options"
              type="checkbox" label="Text Entry" />
            <Form.Check id="wd-website-url" name="check-entry-options"
              type="checkbox" label="Website URL" />
            <Form.Check id="wd-media-recordings" name="check-entry-options"
              type="checkbox" label="Media Recordings" />
            <Form.Check id="wd-student-annotation" name="check-entry-options"
              type="checkbox" label="Student Annotation" />
            <Form.Check id="wd-file-uploads" name="check-entry-options"
              type="checkbox" label="File Uploads" />
          </Form.Group>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-assign">
        <Form.Label column sm={3} align="right">
          Assign
        </Form.Label>
        <Col sm={9} className="border rounded border-gray">
          <FormGroup className="mb-3 mt-2" controlId="wd-assign-to">
            <FormLabel className="mt-2 fw-bold">Assign To</FormLabel>
            <Form.Select>
              <option>Everyone</option>
            </Form.Select>
          </FormGroup>
          <FormGroup className="mb-3" controlId="wd-due-date">
            <FormLabel className="fw-bold">Due</FormLabel>
            <FormControl type="date" defaultValue={assignment?.dueDate}
              onChange={(e) =>
                setAssignmentData({ ...assignmentData, dueDate: e.target.value })
              } />
          </FormGroup>
          <FormGroup as={Row} className="mb-4" controlId="wd-availability">
            <Col>
              <FormGroup className="mb-3" controlId="wd-available-from">
                <FormLabel className="fw-bold">Available From</FormLabel>
                <FormControl type="date" defaultValue={assignment?.availableFromDate}
                  onChange={(e) =>
                    setAssignmentData({ ...assignmentData, availableFromDate: e.target.value })
                  } />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3" controlId="wd-available-until">
                <FormLabel className="fw-bold">Until</FormLabel>
                <FormControl type="date" defaultValue={assignment?.availableUntilDate}
                  onChange={(e) =>
                    setAssignmentData({ ...assignmentData, availableUntilDate: e.target.value })
                  } />
              </FormGroup>
            </Col>
          </FormGroup>
        </Col>
      </Form.Group>
      <hr />
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
        onClick={addOrUpdate}>
        Save
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment"
        onClick={routeBack}>
        Cancel
      </Button>
    </div>
  );
}
