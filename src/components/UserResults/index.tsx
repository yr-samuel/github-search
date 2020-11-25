import React from "react";
import User from "./User";
import "./_userResults.css";
import * as ReactRedux from "react-redux";
import { IReducers } from "../../redux/createStore";
export default function UserResults() {
  const userStats = ReactRedux.useSelector(
    (reducers: IReducers) => reducers.github
  );

  let flag =
    userStats.users.total_count > 1
      ? `Encontrados ${userStats.users.total_count} resultados para ${userStats.user} `
      : `Encontrado ${userStats.users.total_count} resultado para ${userStats.user}`;

  return (
    <div className="mom-userResults">
      <div className="count-results">
        <span>{userStats.user ? flag : null}</span>
      </div>
      <div className="users">
        {userStats.users.items
          ? userStats.users.items.map((current: any) => {
              return (
                <User
                  key={current.id}
                  foto={current.avatar_url}
                  loginNome={current.login}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
