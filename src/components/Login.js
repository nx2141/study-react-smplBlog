import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./signIn.css";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      // console.log(result);
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="signInWrapper">
        <div className="signInInner">
          <p>ログインして始める</p>
          <button onClick={loginInWithGoogle}>Googleでログイン</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
