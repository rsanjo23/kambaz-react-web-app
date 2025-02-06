import Form from "react-bootstrap/esm/Form";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control id="wd-username"
        defaultValue={"alice"}
        placeholder="username"
        className="mb-2" />
      <Form.Control id="wd-password"
        defaultValue={"123"}
        placeholder="password"
        type="password"
        className="mb-2" />
      <Form.Control id="wd-firstname"
        defaultValue={"Alice"}
        placeholder="First Name"
        className="mb-2" />
      <Form.Control id="wd-lastname"
        defaultValue={"Wonderland"}
        placeholder="Last Name"
        className="mb-2" />
      <Form.Control id="wd-dob"
        defaultValue={"2000-01-01"}
        placeholder="password"
        type="date"
        className="mb-2" />
      <Form.Control id="wd-email"
        defaultValue={"alice@wonderland"}
        placeholder="Last Name"
        type="email"
        className="mb-2" />
      <Form.Select id="wd-role"
        defaultValue="FACULTY"
        className="mb-2">
        <option value="USER">
          User
        </option>
        <option value="ADMIN">
          Admin
        </option>
        <option value="FACULTY">
          Faculty
        </option>
        <option value="STUDENT">
          Student
        </option>
      </Form.Select>
      <Link id="wd-signin-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100 mb-2">
        Sign out
      </Link>
    </div>
  );
}
