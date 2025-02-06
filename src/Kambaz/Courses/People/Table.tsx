import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
    return (
        <div id="wd-people-table">
            <Table striped>
                <thead>
                    <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Tony</span>{" "}
                            <span className="wd-last-name">Stark</span>
                        </td>
                        <td className="wd-login-id">001234561S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2020-10-01</td>
                        <td className="wd-total-activity">10:21:32</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Joseph</span>{" "}
                            <span className="wd-last-name">Oh</span>
                        </td>
                        <td className="wd-login-id">001234562S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-12-13</td>
                        <td className="wd-total-activity">12:34:56</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Daniel</span>{" "}
                            <span className="wd-last-name">Oh</span>
                        </td>
                        <td className="wd-login-id">001234563S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">STUDENT</td>
                        <td className="wd-last-activity">2024-12-13</td>
                        <td className="wd-total-activity">12:34:56</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Barbarian</span>{" "}
                            <span className="wd-last-name">King</span>
                        </td>
                        <td className="wd-login-id">001234564S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">TA</td>
                        <td className="wd-last-activity">2025-02-05</td>
                        <td className="wd-total-activity">07:00:00</td>
                    </tr>
                    <tr>
                        <td className="wd-full-name text-nowrap">
                            <FaUserCircle className="me-2 fs-1 text-secondary" />
                            <span className="wd-first-name">Knock</span>{" "}
                            <span className="wd-last-name">2</span>
                        </td>
                        <td className="wd-login-id">001234565S</td>
                        <td className="wd-section">S101</td>
                        <td className="wd-role">Teacher</td>
                        <td className="wd-last-activity">2025-02-05</td>
                        <td className="wd-total-activity">22:22:22</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}