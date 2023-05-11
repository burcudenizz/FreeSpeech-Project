import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import "../App.css";
import { useHistory } from "react-router-dom";

function Login({ setIsSignedUp }) {
  const [profildata, setData] = useState({});

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const onSubmit = (data) => console.log(data);
  const onSubmit = (data) => {
    axios
      .post("https://wit-courses-api2.onrender.com/login", data)
      .then((response) => {
        // handle success response

        setData(response.data);
        console.log("profildata", profildata);
        setTimeout(() => {
          setIsSignedUp(true);
          history.push("/");
        }, 3000);
      })
      .catch((error) => {
        // handle error response
        console.error(error);
      });
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>LOG IN</h1>
        <div className="ui divider"></div>
        <div className="uiform">
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <span className="error">*Email is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="error">*Invalid email address</span>
            )}
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 20,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <span className="error">Password is required</span>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <span className="error">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <span className="error">
                Password cannot exceed 20 characters
              </span>
            )}
          </div>

          <button className="btn">Enter</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
