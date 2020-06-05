import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import "./index.css"
import { Link } from 'react-router-dom';

export default props =>
  <div className="template">
    <Header><img src="../../cropped-slogan-preto-transparente.png" alt="Logo GrowthTech"></img>
    </Header>
    
    <Nav>
      <Link to="/">Group</Link>
      <Link to="/usuarios">Usuários</Link>
      <Link to="/posts">Posts</Link>
    </Nav>
    <hr />
    <main>
      {props.children}
    </main>
    

    <Footer></Footer>
  </div>;
