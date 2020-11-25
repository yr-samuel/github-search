import React from "react";
import { ReactComponent as Logo } from "../img/github.svg";
import { ReactComponent as Loupe } from "../img/loupe.svg";
import * as ReactRedux from "react-redux";
import { githubAction } from "../../redux/reducers";

import "./_header.css";

export default function Header() {
  const dispatch = ReactRedux.useDispatch();
  let TIMEOUT_ID: any = null;

  function handleChange(event: any) {
    let value = event.currentTarget.value;

    clearTimeout(TIMEOUT_ID);

    TIMEOUT_ID = setTimeout(() => {
      dispatch(githubAction(value));
    }, 2000);
  }

  return (
    <div className="mom-div">
      <div className="text-divs">
        <div className="text-logo">
          <Logo className="github-logo" />
          GitHub User Search
        </div>
        <div className="just-text">
          Browse users and their profiles <span>via the Github API</span>
        </div>
      </div>
      <div className="search">
        <input onChange={handleChange} className="input-search" />
        <span>
          <Loupe className="search-img" />
        </span>
      </div>
    </div>
  );
}
