import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import resumer from './resume';
import Content from './Content';
import Nav from './Nav';

class Main extends Component {
    state = { showMenu: false }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { showMenu: false }
    }

    handleClick() {
        this.setState({ showMenu: !this.state.showMenu })

    }

    render() {

        const divStyle = 'none';
        const menuVis = this.state.showMenu ? divStyle : 'block';
        const burgerVis = this.state.showMenu ? 'block' : divStyle;

        const menuVisClass = this.state.showMenu ? 'noprofile' : 'profile';
        //<!--style={{display: menuVis}}-->
        return (
            <>
                <Nav
                    showMenu={this.state.showMenu}
                    menuVis={menuVis}
                    burgerVis={burgerVis}
                    menuVisClass={menuVisClass}
                    onClick={this.handleClick} />

                <Content navState={this.state.showMenu} />
            </>
        );
    }
}

export default Main;