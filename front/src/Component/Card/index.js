import React from "react"
import "./index.css"
import { Link } from 'react-router-dom';

export default props =>
<div className="container center">
  <div className="card">
    <h2 className="titulo">{props.title}</h2>
    <hr/>
    <p className="conteudo">{props.children}
    </p>{props.id?
    <Link  className="lermais" to={{ pathname: `/${props.id}/${props.postid||""}`}}>
      Ler mais...
    </Link>
    :<></>}
  </div>
</div>