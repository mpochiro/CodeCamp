import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';



const Header = () => (

  <header className="header">


    <h1 className="header__title">Journal Example App</h1>
    <div className="center-spread">
    <NavLink to="/" activeClassName="is-active" className="button center-spread" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active" className="button center-spread" >Create Topic</NavLink>
    <NavLink to="/topics" activeClassName="is-active" className="button center-spread" >Footnotes</NavLink>
    <button className="button" onClick={startLogout}><a href='https://whispering-reef-72580.herokuapp.com/'>Logout</a></button>
    </div>
  </header>

);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
