import { signInWithPopup,signOut } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const Logout = () => {
    //ログアウト
    //https://firebase.google.com/docs/auth/web/password-auth?hl=ja
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsAuth(false);
        navigate("/login");
      });
  };
  return (
    <div>
      <p>ログアウトして始める</p>
      <button onClick={Logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
