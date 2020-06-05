import React from "react";
import Detail from "../../Component/Detail";
import "./index.css";
import Template from "../../Component/Template";
//import { useLocation } from "react-router-dom";


export default  props =>
  <Template>
    <Detail id={props.match.params.id} post={props.match.params.postid}>
    </Detail>
  </Template>;


