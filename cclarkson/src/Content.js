import React, { Component } from "react";
import './css/Content.scss'
import './css/flexboxgrid.min.css'
import contentJson from './data/content.json'

class Content extends Component {

    createContent = () => {
        let content = contentJson.items.map(function (v, i) {
            
            const path = v.imageurl
            const image = require('./img/' + path)


            return <div key={i} className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                
                <div className="box-row ">
                  
                    <section className="container">

                        <img className="content-image" src={image} alt={v.imagealt} />

                        <section className="content-info">
                            <h1 className="first-name">{v.first_title}</h1>
                            <h1 className="second-name">{v.second_title}</h1>
                            
                        </section>
                        
                    </section>
                    <section className="box-row-text">
                        <h2>ABOUT</h2>
                        <p>{v.caption}
                        </p>    
                    </section>
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