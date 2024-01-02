import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="error-wrapper">
      <h1>404</h1>
      <p>Page not found</p>
      <p>
        <Link to="/">Back to Hogwarts</Link>
      </p>
    </section>
  );
};

export default Error;
