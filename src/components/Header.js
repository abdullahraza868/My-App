import React from 'react'
import {Form} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div>
      
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link" aria-current="page" to="/">{props.firstbuttoninnav}</Link>
                <Link className="nav-link" aria-current="page" to="/about">{props.secondbuttoninnav}</Link>
          </div>
            </div>
              </div>
  
  <Form className = {`mx-4 text-${props.mode=== 'light'? 'dark' : 'light'} `}>
          <Form.Check type="switch" onClick = {props.toogleMode1} id="custom-switch" label="Red/Grey"/>
      </Form>

      <Form className = {`mx-2 text-${props.mode=== 'light'? 'dark' : 'light'} `}>
        <Form.Check  type="switch" onClick = {props.toogleMode2} id="custom-switch" label="Light/Dark"/>
      </Form>
</nav>
    </div>
  )
}

Header.propTypes = {
  title : PropTypes.string.isRequired,
  firstbuttoninnav : PropTypes.string.isRequired,
  secondbuttoninnav : PropTypes.string
};
Header.defaultProps ={
  title : 'Set title here',
  firstbuttoninnav: 'Home',
};

