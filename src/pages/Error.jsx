import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="error-section section">
      <h1>oops! it's an end</h1>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </section>
  );
};

export default Error;
