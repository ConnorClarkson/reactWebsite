import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './css/style.min.css';
import './css/resume.scss';
import resumeJson from './data/resume.json';
import WorkIcon  from '@material-ui/icons/Code';


class Resume extends Component {
    createResume = () => {
        let resume = resumeJson.items.map(function (v, i) {

            const style = { boxShadow: `inset 0px 11px 0 #f00`}
            const bio = v.bio.join('\n')
            
            return <VerticalTimelineElement key={i}
                className="vertical-timeline-element--work"
                date={v.dates}
                iconStyle={{ background: 'rgb(51, 167, 247)', color: '#fff' }}
                icon={<WorkIcon />}
                >
                <h3 className="vertical-timeline-element-title">{v.job_title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{v.company}</h4>

                {bio.split("\n").map((text, j) => {
                    return <p key={ j }>{text}<br/></p>
                })}
               

            </VerticalTimelineElement>
        });
        return resume
    }

    render() {

        

        return (
            <div className="resume">


                <VerticalTimeline layout={'one-column'}>
                    {this.createResume()}
                </VerticalTimeline>
            </div>
        );
    }
}

export default Resume;