import React from "react";
import "./_user.css";

interface user {
  foto: string;
  loginNome: string;
  githubLink: string;
}

export default function User(props: user) {
  return (
    <div className="box-user">
      <a href={props.githubLink}>
        <img src={props.foto} alt="" />

        <span>{props.loginNome}</span>
      </a>
    </div>
  );
}
