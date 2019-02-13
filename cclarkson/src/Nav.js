import React, { Component } from "react";
import './css/Nav.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
    render() {


        return (
            <>

                <div className={this.props.menuVisClass} >
                    <div className="Nav">
                        <div className="profile-bg"></div>
                        <section className="container">
                            <aside className="profile-image">
                            </aside>
                            <section className="profile-info">
                                <h1 className="first-name">Connor</h1>
                                <h1 className="second-name">Clarkson</h1>
                                <h2>ABOUT</h2>
                                <p>
                                    Hello world! I'm Connor, a Software Developer! <br />
                                    I studied Computer Science with Games Development (BSC) at the University of Hull.
                                    I have worked on developing software for the NHS , Computer graphic research at the university of Hull,
                                    and was lucky enough to be able to work at the London 2012 Olympics.
                        </p>

                                <aside className="social-media-icons">
                                    <a href="https://www.linkedin.com/in/connorclarkson" target="_blank">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://github.com/sqidge" target="_blank">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </aside>
                            </section>
                        </section>
                        <br />


                        <button className="icon close" onClick={this.props.onClick}></button>
                    </div>


                    <div className="menuText">
                        <ul>
                            <li>
                                <Link to='/' onClick={this.props.onClick}>
                                    <h2>Showcase</h2>
                                    <ul className="innerList">
                                        <li>
                                            item 1
                                    </li>
                                        <li>
                                            item 2
                                    </li>
                                        <li>
                                            item 3
                                    </li>
                                    </ul>
                                </Link>
                            </li>
                            <li>
                                <Link to='/resume' onClick={this.props.onClick}>
                                    <h2>Resume</h2>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' onClick={this.props.onClick}>
                                    <h2>TBC</h2>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="menudiv" style={{ display: this.props.burgerVis }}>
                    <button className="icon menu" onClick={this.props.onClick}></button>
                </div>
            </>
        );
    }
}

export default Nav;
