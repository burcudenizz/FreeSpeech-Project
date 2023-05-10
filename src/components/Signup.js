import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../App.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // const onSubmit = (data) => console.log(data);

  const history = useHistory();

  function onSubmit(data) {
    console.log(data);
    axios
      .post("https://wit-courses-api2.onrender.com/signup", data)
      .then((res) => {
        localStorage.setItem("freespeech", res.data.token);
        setTimeout(() => {
          history.push("/");
        }, 4000);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Sign Up</h1>
        <div className="ui divider"></div>
        <div className="uiform">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", {
                required: true,
                maxLength: 20,
                minLength: 3,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.username && errors.username.type === "required" && (
              <span className="error">*Username is required</span>
            )}
            {errors.username && errors.username.type === "maxLength" && (
              <span className="error">
                *Username cannot exceed 20 characters
              </span>
            )}
            {errors.username && errors.username.type === "minLength" && (
              <span className="error">
                *Username must have at least 3 characters
              </span>
            )}
            {errors.username && errors.username.type === "pattern" && (
              <span className="error">* Username can only contain letters</span>
            )}
          </div>

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
            <label>Avatar Url</label>
            <input
              type="text"
              name="text"
              placeholder="Avatar Url"
              {...register("url", {
                required: false,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
              })}
            />
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

          <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
