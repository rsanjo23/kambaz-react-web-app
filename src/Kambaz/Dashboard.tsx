import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./reducer";
import * as coursesClient from "./Courses/client";
import * as enrollmentsClient from "./client";

export default function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, fetchCourses }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; fetchCourses: () => void;
    }) {
    const [allCourses, setAllCourses] = useState<any[]>([]);
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
    const changeEnrollment = async (cid: any) => {
        if (isEnrolled(cid)) {
            const enrollmentToDelete = enrollments.find((enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === cid);
            await enrollmentsClient.deleteEnrollment(enrollmentToDelete._id);
            dispatch(deleteEnrollment(enrollmentToDelete._id));
        }
        else {
            await coursesClient.createEnrollment(cid, currentUser._id);
            dispatch(addEnrollment({ user: currentUser._id, course: cid }));
        }
        await fetchCourses();
    }
    const fetchAllEnrollments = async () => {
        const enrollments = await enrollmentsClient.fetchAllEnrollments();
        dispatch(setEnrollments(enrollments));
    };
    const fetchAllCourses = async () => {
        try {
            const allCourses = await coursesClient.fetchAllCourses();
            setAllCourses(allCourses);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchAllCourses();
        fetchAllEnrollments();
    }, []);
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            {
                currentUser.role === "FACULTY" &&
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={addNewCourse} >
                            Add
                        </button>
                        <button className="btn btn-warning float-end me-2"
                            onClick={updateCourse} id="wd-update-course-click">
                            Update
                        </button>
                    </h5>
                    <br />
                    <FormControl value={course.name} className="mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <FormControl value={course.description} as="textarea" rows={3}
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
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
            <h2 id="wd-dashboard-published">Published Courses ({allCourses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    {(!showEnrollments ? courses : allCourses)
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
                                                        setCourse(course);
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
