import Form from "react-bootstrap/esm/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = async () => {
        const currentUser = await client.signup(user);
        dispatch(setCurrentUser(currentUser));
        navigate("/Kambaz/Account/Profile");
    };
    return (
        <div id="wd-signup-screen">
            <h3>Sign up</h3>
            <Form.Control id="wd-username"
                placeholder="username"
                className="mb-2"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <Form.Control id="wd-password"
                placeholder="password" type="password"
                className="mb-2"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button onClick={signup} className="wd-signup-btn btn btn-danger mb-2 w-100">
                Sign up
            </button>
            <br />
        </div>
    );
}
