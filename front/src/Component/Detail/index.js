import React, { useState, useEffect } from "react";
import "./index.css";
import Api from "../../Services/Api";
import { Link } from "react-router-dom";

function Detalhes(props) {
  // Declara uma nova variável de state, que chamaremos de "count"
  const [post, setPost] = useState([]);
  const [user, setUser] = useState([]);


  useEffect(() => {
    const getPost = async () => {
      const response = await Api.get("/api/post/"+props.post);
      setPost(response.data);
    };

    getPost();
  }, [props.post]);

  useEffect(()=>{
    const getUser = async ()=>{
      const response = await Api.get("/api/users/"+props.id);
      setUser(response.data);
    };

    getUser();
  },[props.id]);



  return (
    <div className="detalhes">
      <h2 className="titulo">
        {post.map(e=>e.title)}
      </h2>
      <hr />
      <div className="texto">
        {post.map(e=>e.body)}
      </div>
      <div className="usuario">
      Postado por:<Link to={{ pathname: `/${props.id}/`}}>{user.map(e=>e.name)}</Link>
        
      </div>
    </div>
    )
  
  
}



export default Detalhes;
