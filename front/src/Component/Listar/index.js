import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import Card from "../Card";
import "./index.css"


function Listar() {
  // Declara uma nova variável de state, que chamaremos de "count"
  const [res, setResp] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await Api.get("/api/group");
      setResp(response.data);
    };
    getUsers();
  }, []);

  return (<div className="box">
    {res.map(user =>
      user.map(e =>
        <div className="listar" key={e.id}>
          <Card title={e.title} postid={e.id} id={e.userId}  key={e.id}>
            {e.body}
          </Card>
        </div>
      )
    )
    }
    </div>
  )
  
}

export default Listar;
