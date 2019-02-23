import React, { Component } from "react";
import './css/Content.scss'
import './css/flexboxgrid.min.css'
import contentJson from './data/content.json'

class Content extends Component {

    createContent = () => {
        let content = contentJson.items.map(function (v, i) {
            
            const path = v.imageurl
            const image = require('./img/' + path)
            let secondHeader = v.second_title
            if (v.hasOwnProperty('second_title_html')) {
                secondHeader = <a className="secondHeader" href={v.second_title_html} target="_blank"> {v.second_title}</a>
            }
            let github 
            if (v.hasOwnProperty('github')) {
               github =  <a className="github" href={v.github} target="_blank"> <i className="fab fa-github fa-3x"></i></a>
            }
            return <div key={i} className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="box-row "> 
                        <div className="contentheader">
                            <div className="content-img-div">
                                <img className="content-image" src={image} alt={v.imagealt}  />
                            </div>
                            <div className="content-info">
                                <h1 className="tech">{v.first_title}</h1>
                                <h1 className="project">{secondHeader}</h1>
                                {github}
                            </div>                     
                        </div>
                        <div className="box-row-text">
                            <h2>ABOUT</h2>
                            <p>{v.caption}
                            </p>       
                        </div>
                    </div>
                </div>

        });

        return content
    }

    render() {
        return (
            <div >
                <div className="row">
                    {this.createContent()}
                </div>
                <div className="loadingtext">
                    <h1 className="loading">WORK IN PROGRESS</h1>
                </div>

            </div>
        );
    }
}

export default Content;