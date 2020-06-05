import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import Card from "../Card";


function Posts() {
    // Declara uma nova variável de state, que chamaremos de "count"
    const [res, setResp] = useState([]);
    useEffect(() => {
      const getPosts = async () => {
        const response = await Api.get("/api/posts");
        setResp(response.data);
      };
      getPosts();
    }, []);
  
    return (
      res.map(e =>

          <Card title={e.title} href="/detalhes" postid={e.id} id={e.userId}  key={e.id}>
            {e.body}
          </Card>
        
      )
    )
    
  }
  
  export default Posts;