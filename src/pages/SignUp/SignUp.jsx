import React from "react";
import Button from "../../components/Button/Button";

const SignUp = ({ disabled, onClick, onMove }) => {
  return (
    <div>
      <Button disabled={disabled} onClick={onClick}>
        가입하기
      </Button>
      <Button onClick={onMove("/")}>로그인 페이지로</Button>
    </div>
  );
};

export default SignUp;
