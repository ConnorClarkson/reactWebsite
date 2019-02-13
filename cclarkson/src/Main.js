import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom'

import Resume from './resume';
import Content from './Content';
import Nav from './Nav';
import './css/index.scss';

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
        const blur = this.state.showMenu ? 'content noblur' : 'content blur';
        const menuVisClass = this.state.showMenu ? 'noprofile' : 'profile';
        return (
            <div className="main">
                <Nav
                    showMenu={this.state.showMenu}
                    menuVis={menuVis}
                    burgerVis={burgerVis}
                    menuVisClass={menuVisClass}
                    onClick={this.handleClick} />

                <div className={blur}>
                    <Switch>
                        <Route exact path='/' component={Content} />
                        <Route path='/resume' component={Resume} />
                    </Switch>
                </div>

            </div>
        );
    }
}

export default Main;