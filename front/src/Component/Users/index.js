import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import Card from "../Card";
import "./index.css";
import { Link } from "react-router-dom";

function Usuario(props) {
  const [res, setResp] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const response = await Api.get("/api/users/");
      setResp(response.data);
    };
    getUser();
  }, []);

  return (
    <div className="users">
      {res.map(e =>
        <Link to={{ pathname: `/${e.id}` }} key={e.id}>
          <Card title={e.name} key={e.id}>
            {e.body}
          </Card>
        </Link>
      )}
    </div>
  );
}

export default Usuario;
