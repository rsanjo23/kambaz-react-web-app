import { Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl defaultValue="A1 - ENV + HTML" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-description">
        <FormControl as="textarea" rows={5}>
          The assignment is available online Submit a link to the landing page of
        </FormControl>
      </FormGroup>
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={3} align="right">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control defaultValue={100} />
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
            <FormControl type="date" defaultValue="2024-05-13" />
          </FormGroup>
          <FormGroup as={Row} className="mb-4" controlId="wd-availability">
            <Col>
              <FormGroup className="mb-3" controlId="wd-available-from">
                <FormLabel className="fw-bold">Available From</FormLabel>
                <FormControl type="date" defaultValue="2024-05-06" />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-3" controlId="wd-available-until">
                <FormLabel className="fw-bold">Until</FormLabel>
                <FormControl type="date" defaultValue="2024-05-20" />
              </FormGroup>
            </Col>
          </FormGroup>
        </Col>
      </Form.Group>
      <hr />
      <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment">
        Save
      </Button>
      <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment">
        Cancel
      </Button>
    </div>
  );
}
