import { Link } from "react-router";

export default function TOC() {
    return (
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kambaz">Kambaz</Link></li>
        <li><a href="https://github.com/rsanjo23/kambaz-react-web-app" id="wd-github">Ryan's GitHub</a></li>
      </ul>
    );
}
  