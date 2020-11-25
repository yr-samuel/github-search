import React from "react";
import "./_user.css";

interface user {
  foto: string;
  loginNome: string;
}

export default function User(props: user) {
  return (
    <div className="box-user">
      <img src={props.foto} alt="" />

      <span>{props.loginNome}</span>
    </div>
  );
}
