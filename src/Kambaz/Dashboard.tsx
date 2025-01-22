import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/reactjs.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3020/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/onepiecelogo.jpg" width={200} />
                        <div>
                            <h5> OP3020 Pirate History </h5>
                            <p className="wd-dashboard-course-title">
                                Emperor of the sea  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/5000/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/calculator.png" width={200} />
                        <div>
                            <h5> MATH5000 Calculating </h5>
                            <p className="wd-dashboard-course-title">
                                Texas Instruments  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1235/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/embeddedsw.jpg" width={200} />
                        <div>
                            <h5> CS1235 Embedded SW</h5>
                            <p className="wd-dashboard-course-title">
                                Big Robot Guy  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3540/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/videogameprogramming.jpg" width={200} />
                        <div>
                            <h5> CS3540 Game Programming </h5>
                            <p className="wd-dashboard-course-title">
                                Gamer  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/9999/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/drracketlogo.png" width={200} />
                        <div>
                            <h5> CS9999 Dr. Racket Supreme</h5>
                            <p className="wd-dashboard-course-title">
                                PhD+ Creator  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1000/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/spotifylogo.png" width={200} />
                        <div>
                            <h5> MUS1000 Playlist Making </h5>
                            <p className="wd-dashboard-course-title">
                                DJ X  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/0001/Home"
                        className="wd-dashboard-course-link" >
                        <img src="/images/helloworld.png" width={200} />
                        <div>
                            <h5> CS0001 Hello World </h5>
                            <p className="wd-dashboard-course-title">
                                Richard  </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
  