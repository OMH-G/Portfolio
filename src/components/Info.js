import React from 'react'
import '../static/css/Info.css'
import { useState } from 'react';
export default function Info() {
    var providers=['coursera','IBM'];
    var deploys = [
        {
            image: 'https://www.inlifehealthcare.com/wp-content/uploads/2016/03/To-Do-List.png',
            source: 'https://todoapplistvslist.herokuapp.com/'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/1457/1457806.png',
            source: 'https://bankrupthone.herokuapp.com'
        },

    ]
    var certificates = {'coursera':[{
        name: 'Intro to Datascience',
        image: 'https://mentocta.com/wp-content/uploads/2016/08/datascience.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/7WWF4ZWB7A4Q'
    },
    {
        name: 'Using Databases with python',
        image: 'https://www.nicepng.com/png/full/207-2073547_sql-server-icon-png-29-transparent-background-database.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/9LYY8GC2F6BN'
    },
    {
        name: 'Visualizing Data with python',
        image: 'https://freepngimg.com/thumb/technology/63583-visualization-data-illustration-png-image-high-quality.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/72FQJLZELQBL'
    },
    {
        name: 'Using python to access web ',
        image: 'https://www.pngmart.com/files/7/Web-Design-Transparent-Images-PNG.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/TY2HVH899V4L'
    },
    {
        name: 'Data Structure with python',
        image: 'http://inspireclasses.com/wp-content/uploads/2019/01/ds.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/KLRMTQFWQ6KT'
    },
    {
        name: 'Python for Everybody',
        image: 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png',
        source: 'https://www.coursera.org/account/accomplishments/certificate/UUTQFQXBJP6U'
    }
],
'IBM':[{
    name:'sldkf',
    image:'sldfk',
    source:'sldfl'
}]
};
    const [changeprov, setchangeprov] = useState("coursera");
    function provselect(value){
        setchangeprov(value);
    }
    return (
        <>
            <div className="three">
                <div style={{ 'alignSelf': 'baseline', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                    <h1>I am a Web-Developer and <span></span></h1>
                </div>
                <div className="flex-prof-card">

                    <div className="info-flip-card">
                        <div className="info-flip-card-inner">
                            <div className="info-flip-card-front">
                                <div id="info-1">

                                </div>
                                <div id="info-1-name">
                                    OMH-G
                                </div>
                            </div>
                            <div className="info-flip-card-back">

                            </div>

                        </div>
                    </div>
                    <div className="l-info-container">
                        <div className="info-content v4">
                            <p>I dont' know dude, May be this could be important, May be not, who knows? I don't know, Do you know? Do you know somebody that knows this maybe, call me maybe.</p>
                        </div>
                        <div class="skills-body">
                            <div class="skill-bars">
                                <div class="bar">
                                    <div class="info">
                                        <span>HTML</span>
                                    </div>
                                    <div class="progress-line html">
                                        <span></span>
                                    </div>
                                </div>
                                
                                <div class="bar">
                                    <div class="info">
                                        <span>CSS</span>
                                    </div>
                                    <div class="progress-line css">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>jQuery</span>
                                    </div>
                                    <div class="progress-line jquery">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>Python</span>
                                    </div>
                                    <div class="progress-line python">
                                        <span></span>
                                    </div>
                                </div>
                                <div class="bar">
                                    <div class="info">
                                        <span>MySQL</span>
                                    </div>
                                    <div class="progress-line mysql">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'column', 'alignItems': 'center', 'backgroundColor': 'honeydew', 'padding': '10px', 'borderRadius': '20px' }}>
                                <div>Deploys</div>
                                <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>
                                    {deploys.map(item =>
                                        <div class="wrapper-card my-1 mx-1">
                                            <div class="tiles-card root-wrapper-card ach">
                                                <div class="tiles-overlay">

                                                </div>
                                                <div class="tiles-circle">
                                                    <img src={item.image} data-v-5e99277a="" alt="" />
                                                    <p>
                                                        <a href={item.source}>Enter</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>)}

                                </div>
                            </div>
                            <div className="acheive-flex">
                                <div class="wall my-4">
                                    <div class="stage">
                                        <div class="wrapper-text">
                                            <div class="slash"></div>
                                            <div class="sides">
                                                <div class="side"></div>
                                                <div class="side"></div>
                                                <div class="side"></div>
                                                <div class="side"></div>
                                            </div>
                                            <div class="text-acheive">
                                                <div class="text--backing">Acheivements</div>
                                                <div class="text--left">
                                                    <div class="inner">Acheivements</div>
                                                </div>
                                                <div class="text--right">
                                                    <div class="inner">Acheivements</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-flex-course">
                                    <div className="course-comp">
                                        {providers.map((item)=>
                                            <div className="nameofprov" onClick={()=>provselect(item)}>{item}</div>
                                        )}
                                    </div>
                                <div className="certificates my-10">
                                    {certificates[changeprov].map((item) =>
                                        <div class="wrapper-card my-1 mx-1">
                                            <div class="tiles-card root-wrapper-card ach" >
                                                <div class="tiles-overlay">

                                                </div>
                                                <div class="tiles-circle" style={{ 'backgroundColor': 'bisque' }}>
                                                    <img src={item.image} data-v-5e99277a="" alt="" />
                                                    <p>
                                                        <a href={item.source} target="blank">🔦</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="newdata">
                                                {item.name}
                                            </div>
                                        </div>)}
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="slider-body">

                        <div class="top-container-slider">
                            🖐That's All Folks!!😀
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

