/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Button } from "antd";
import axios from "axios";
import { USER_SERVER } from "../../../Config";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then((response) => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <>
        <Link to="/login">
          <Button>Log In</Button>
        </Link>
      </>
    );
  } else {
    return (
      <Button>
        <a onClick={logoutHandler}>Logout</a>
      </Button>
    );
  }
}

export default withRouter(RightMenu);
