import React, { Component } from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './css/style.min.css';
import './css/resume.scss';
import resumeJson from './data/resume.json';
import WorkIcon from '@material-ui/icons/Code';
import EduIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
class Resume extends Component {
    createResume = () => {
        let resume = resumeJson.items.map(function (v, i) {
            
            

            if (v.hasOwnProperty('bio')) {
                const response = v.responsiblities
                const achievements = v.acheivements
                const bio = v.bio.join('\n')
                return <VerticalTimelineElement key={i}
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: 'rgb(51, 167, 247)', color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{v.job_title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{v.company}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{v.dates}</h5>
                    {bio.split("\n").map((text, j) => {
                        return <p key={j}>{text}<br /></p>
                    })}
                    <h5>Responsibilities</h5>
                    <ul>
                        {response.map(function (text, key) {
                            return <li key={key}>{text}</li>
                        })}
                    </ul>
                    <h5>Achievements</h5>
                    <ul>
                        {achievements.map(function (text, key) {
                            return <li key={key}>{text}</li>
                        })}
                    </ul>

                </VerticalTimelineElement>
            } else {
                
                return <VerticalTimelineElement key={i}
                    className="vertical-timeline-element--education"
                    iconStyle={{ background: 'rgb(159, 28, 10)', color: '#fff' }}
                    icon={<EduIcon />}
                >
                    <h3 className="vertical-timeline-element-title">{v.qaulifaction}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{v.school}</h4>
                    <h5 className="vertical-timeline-element-subtitle">{v.dates}</h5>                   
                </VerticalTimelineElement>
            }
        });


        return resume
    }

    render() {
        return (
            <div className="resume">
                <VerticalTimeline layout={'1-column'}>
                    {this.createResume()}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>
        );
    }
}

export default Resume;