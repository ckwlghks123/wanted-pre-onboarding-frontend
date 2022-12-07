import React, { useRef, useState } from "react";
import axios from "axios";

const URL = process.env.REACT_APP_SERVER_URL;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}auth/signin`, {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then((res) => res.data);
  };

  const handleChange = () => {
    const emailValid = emailRef.current.value.includes("@");
    const passwordValid = passwordRef.current.value.length >= 8;
    emailValid && passwordValid ? setIsActive(true) : setIsActive(false);
    return;
  };

  return (
    <div>
      <form>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="이메일을 입력 해 주세요."
            autoComplete="off"
            onChange={handleChange}
            ref={emailRef}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="비밀번호를 입력 해 주세요."
            onChange={handleChange}
            ref={passwordRef}
          />
        </fieldset>
        <button disabled={!isActive} onClick={handleSubmit}>
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
