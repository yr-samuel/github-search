import React from "react";
import User from "./User";
import "./_userResults.css";
import * as ReactRedux from "react-redux";
import { IReducers } from "../../redux/createStore";
import Loader from "../Loader";
export default function UserResults() {
  const userStats = ReactRedux.useSelector(
    (reducers: IReducers) => reducers.github
  );

  let flag =
    userStats.totalCount === 1
      ? `Encontrado ${userStats.totalCount} resultado para ${userStats.user}`
      : `Encontrados ${userStats.totalCount} resultados para ${userStats.user} `;
  if (userStats.loading) {
    return <Loader />;
  }

  return (
    <div className="mom-userResults">
      <div className="count-results">
        <span>{userStats.user ? flag : null}</span>
      </div>
      <div className="users">
        {userStats.users &&
          userStats.users.map((current: any) => {
            return (
              <User
                key={current.id}
                foto={current.avatar_url}
                loginNome={current.login}
                githubLink={current.html_url}
              />
            );
          })}
      </div>
    </div>
  );
}
