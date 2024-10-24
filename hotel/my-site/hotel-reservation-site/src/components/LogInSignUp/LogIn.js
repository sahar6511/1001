import React from "react";
import Input from "../Input/Input";
import Space from "../Space/Space";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "../../styles/main.scss";

const LogIn = () => {
  return (
    <div className="login">
      <Input placeholder="نام کاربری" type="text" />
      <Space />
      <Space />
      <Input placeholder="رمز عبور" type="text" />
      <Space />
      <Space />
      <Space />
      <button className="btn">ورود</button>
      
    </div>
  );
};

export default LogIn;
