import { Button, Card, CardText, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4">
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1234/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/reactjs.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
                                    <CardText className="wd-dashboard-course-description">
                                        Full Stack software developer
                                    </CardText>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3020/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/onepiecelogo.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> OP3020 Pirate History </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Emperor of the sea
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/5000/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/calculator.png" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> MATH5000 Calculating </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Texas Instruments
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1235/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/embeddedsw.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS1235 Embedded SW</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Big Robot Guy
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/3540/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/videogameprogramming.jpg" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS3540 Game Programming </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Gamer
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/9999/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/drracketlogo.png" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS9999 Dr. Racket Supreme</Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        PhD+ Creator
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/1000/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/spotifylogo.png" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> MUS1000 Playlist Making </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        DJ X
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to="/Kambaz/Courses/0001/Home"
                                className="wd-dashboard-course-link text-decoration-none text-dark" >
                                <Card.Img variant="top" src="/images/helloworld.png" width={200} />
                                <Card.Body>
                                    <Card.Title className="wd-dashboard-course-title"> CS0001 Hello World </Card.Title>
                                    <Card.Text className="wd-dashboard-course-description">
                                        Richard
                                    </Card.Text>
                                    <Button variant="primary"> Go </Button>
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
