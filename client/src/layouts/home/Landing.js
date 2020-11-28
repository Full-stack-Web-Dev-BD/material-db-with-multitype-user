import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import WebIcon from '@material-ui/icons/Web';
import DevicesIcon from '@material-ui/icons/Devices';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

const Landing=()=>{
    const content=[
        {title:'Desktop Application', icon:DesktopMacIcon, description:'Our creative team develop any type of desktop application'},
        {title:'Web Application', icon:WebIcon, description:'Our creative team develop and deploy any type of web application'},
        {title:'Mobile Application', icon:DevicesIcon, description:'Our creative team will develop any type of mobile application'},
        {title:'Software Development', icon:DeveloperBoardIcon, description:'Our creative team develop any type of software'}
    ]
    return(
        <section className="section" id="landing">
            <Slider autoplay={3000}>
                {content.map((item) => (
                    <div className="slider" id="slider">
                        <div className="center">
                            <item.icon style={{width:200, height:100}}/>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}
export default Landing;