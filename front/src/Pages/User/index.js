import React from 'react'
import Template from '../../Component/Template'
import User from '../../Component/User'


export default props=>
    <Template>
        <User id={props.match.params.id}></User>
    </Template>

