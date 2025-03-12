import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { useState } from "react";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard() {
    const { courses } = useSelector((state: any) => state.coursesReducer);
    const [courseData, setCourseData] = useState({
        name: "New",
        number: "NEW1000",
        startDate: "2025-03-10",
        endDate: "2025-03-11",
        department: "N/A",
        credits: 4,
        description: "New",
        author: "654f9ec2ea7ead465908d1e3",
        image: "onepiecelogo.jpg",
    });
    const [showEnrollments, setShowEnrollments] = useState(false);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
    const dispatch = useDispatch();
    function isEnrolled(cid: any): boolean {
        const testEnrollment = enrollments.find((enrollment: any) =>
            enrollment.user === currentUser._id &&
            enrollment.course === cid);
        return testEnrollment !== undefined;
    }
    function changeEnrollment(cid: any): any {
        if (isEnrolled(cid)) {
            const enrollmentToDelete = enrollments.find((enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === cid);
            dispatch(deleteEnrollment(enrollmentToDelete._id));
        }
        else {
            dispatch(addEnrollment({ user: currentUser._id, course: cid }));
        }
    }
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {
                currentUser.role === "FACULTY" &&
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={() => dispatch(addCourse(courseData))} >
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={() => dispatch(updateCourse(courseData))} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl value={courseData.name} className="mb-2"
                        onChange={(e) => setCourseData({ ...courseData, name: e.target.value })} />
                    <FormControl value={courseData.description} as="textarea" rows={3}
                        onChange={(e) => setCourseData({ ...courseData, description: e.target.value })} />
                    <hr />
                </div>
            }
            {
                currentUser.role === "STUDENT" &&
                <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={() => setShowEnrollments(!showEnrollments)} >
                    Enrollments
                </button>
            }
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {courses
                        .filter((course: any) =>
                            enrollments.some(
                                (enrollment: any) =>
                                    showEnrollments ||
                                    enrollment.user === currentUser._id &&
                                    enrollment.course === course._id
                            ))
                        .map((course: any) => (
                            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                                <Card>
                                    <Link to={
                                        isEnrolled(course._id) ?
                                            `/Kambaz/Courses/${course._id}/Home` :
                                            `/Kambaz/Dashboard`
                                    }
                                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                                        <Card.Img src={`/images/${course.image}`} variant="top" width="100%" height={160} />
                                        <Card.Body className="card-body">
                                            <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                                                {course.name} </Card.Title>
                                            <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                                {course.description} </Card.Text>
                                            <Button variant="primary"> Go </Button>
                                            {
                                                currentUser.role === "FACULTY" &&
                                                <button onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(course._id);
                                                }} className="btn btn-danger float-end"
                                                    id="wd-delete-course-click">
                                                    Delete
                                                </button>
                                            }
                                            {
                                                currentUser.role === "FACULTY" &&
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourseData(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end" >
                                                    Edit
                                                </button>
                                            }
                                            {
                                                currentUser.role === "STUDENT" && showEnrollments &&
                                                <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        changeEnrollment(course._id);
                                                    }}
                                                    className={`btn 
                                                        ${isEnrolled(course._id) ? "btn-danger" : "btn-success"} float-end`} >
                                                    {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                                                </button>
                                            }
                                        </Card.Body>
                                    </Link>
                                </Card>
                            </Col>
                        ))}
                </Row>
            </div>
        </div>
    );
}
