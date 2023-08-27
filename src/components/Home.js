import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db,auth } from "../firebase";
import "./Home.css";

const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      // console.log(data);
      // console.log(data.docs);
      // console.log(data.docs.map((doc) => ({doc})));
      // console.log(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>

            <div className="postTextContainer">
              <p>{post.postsText}</p>
            </div>
            <div className="nameAndDeleteButton">
              <h3>@{post.author.username}</h3>
              {/*
              JSX記法ではif文によるレンダリング分岐ができないため、
              &&を使用した短絡評価を使用する。
              
              【Googleログインしていない状態でホームに行くとエラーになる】
              エラー回避のためオプショナルチェイニングを使用。(?.uid の部分) 
              これにより、auth.currentUser が存在しない場合や
              uid プロパティが存在しない場合にも対応できる。
              */}
              {post.author.id === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>削除</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
