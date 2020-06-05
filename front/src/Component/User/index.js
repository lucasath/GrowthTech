import React, { useState, useEffect } from "react";
import Api from "../../Services/Api";
import "./index.css"

function User(props) {
  const [user, setUser] = useState([]);

  useEffect(
    () => {
      const getUser = async () => {
        const response = await Api.get("/api/users/" + props.id);
        setUser(response.data);
      };

      getUser();
    },
    [props.id]
  );

  return (
    <div className="perfil">
      <h2 className="titulo">
        {user.map(e => e.name)}
      </h2>
      <div className="usuario">
        <div>
        User Name: {user.map(e => e.username)}
        </div>
        <div>
            E-mail: <a href={"mailto:"+user.map(e => e.email)}>{user.map(e => e.email)}</a>
        </div>
        <div>
          Numero: {user.map(e => e.phone)}
        </div>
        <div>
            Site: <a
            target="_blank"
            href={"http://"+user.map(e => e.website)}
            rel="noopener noreferrer"
          >{user.map(e => e.website)}</a>
        </div>
      </div>
      <div className="endereco">
        <div>Cidade: {user.map(e=>e.address.city)}</div>
        <div>
            Rua: {user.map(e=>e.address.street)}
        </div>
        <div>
            CEP: {user.map(e=>e.address.zipcode)}
        </div>
        <div>
            AP: {user.map(e=>e.address.suite)}
        </div>
        <div>
            <a target="_blank" rel="noopener noreferrer" href={"https://www.google.com/maps/search/?api=1&map_action=map&query="+user.map(e=>e.address.geo.lat)+","+user.map(e=>e.address.geo.lng)}>Localização</a>
        </div>
      </div>
      <div className="empresa">
          <div>
              Empresa: {user.map(e=>e.company.name)}
          </div>
          <div>
              Sobre: {user.map(e=>e.company.catchPhrase)}
          </div>
          <div>
              Atuação: {user.map(e=>e.company.bs)}
          </div>
      </div>
    </div>
  );
}

export default User;
