import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../../utils/localStorage";

import Button from "../../components/Button/Button";

const SignIn = ({ disabled, onClick, onMove }) => {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = getToken();
      if (token) {
        navigate("/todo", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  }, [navigate]);

  return (
    <div>
      <Button disabled={disabled} onClick={onClick}>
        로그인
      </Button>
      <Button onClick={onMove("/sign-up")}>회원가입 페이지로</Button>
    </div>
  );
};

export default SignIn;
