import { Form } from "react-bootstrap";

import "./Login.css";

function Login() {
  return (
    <Form className="login-form">
      <div class="form-outline mb-4">
        <input type="email" id="form2Example1" class="form-control" />
        <label class="form-label" for="form2Example1">Email address</label>
      </div>
    </Form>
  );
}

export default Login;
