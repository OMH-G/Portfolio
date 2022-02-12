import React from 'react'
import '../static/css/Info.css'
import { useState } from 'react';
export default function Info() {
    var providers = ['coursera', 'IBM'];
    var deploys = [
        {
            id:1,
            image: 'https://www.inlifehealthcare.com/wp-content/uploads/2016/03/To-Do-List.png',
            source: 'https://todoapplistvslist.herokuapp.com/'
        },
        {   id:2,
            image: 'https://cdn-icons-png.flaticon.com/512/1457/1457806.png',
            source: 'https://bankrupthone.herokuapp.com'
        },

    ]
    var certificates = {
        'coursera': [{
            id:1,
            name: 'Intro to Datascience',
            image: 'https://mentocta.com/wp-content/uploads/2016/08/datascience.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/7WWF4ZWB7A4Q'
        },
        {   id:2,
            name: 'Using Databases with python',
            image: 'https://www.nicepng.com/png/full/207-2073547_sql-server-icon-png-29-transparent-background-database.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/9LYY8GC2F6BN'
        },
        {
            id:3,
            name: 'Visualizing Data with python',
            image: 'https://freepngimg.com/thumb/technology/63583-visualization-data-illustration-png-image-high-quality.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/72FQJLZELQBL'
        },
        {id:4,
            name: 'Using python to access web ',
            image: 'https://www.pngmart.com/files/7/Web-Design-Transparent-Images-PNG.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/TY2HVH899V4L'
        },
        {   id:5,
            name: 'Data Structure with python',
            image: 'http://inspireclasses.com/wp-content/uploads/2019/01/ds.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/KLRMTQFWQ6KT'
        },
        {   id:6,
            name: 'Python for Everybody',
            image: 'http://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png',
            source: 'https://www.coursera.org/account/accomplishments/certificate/UUTQFQXBJP6U'
        }
        ],
        'IBM': [{
            id:1,
            name: 'sldkf',
            image: 'sldfk',
            source: 'sldfl'
        }]
    };
    const [changeprov, setchangeprov] = useState("coursera");
    function provselect(value) {
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
                            <p>Hey Everybody Hope you are doing well,Finally commited myself to make a portfolio with what I have done so far.
                                Always curious and finding new solution to existing problems should be goal of human.
                                <strong>Stay Cool,Stay Happy</strong>
                            </p>
                        </div>
                        <div className="skills-body">
                            {/* <div className="flex-deploy"> */}
                            <div className="skill-bars">
                                <div className="bar">
                                    <div className="info">
                                        <span>HTML</span>
                                    </div>
                                    <div className="progress-line html">
                                        <span></span>
                                    </div>
                                </div>

                                <div className="bar">
                                    <div className="info">
                                        <span>CSS</span>
                                    </div>
                                    <div className="progress-line css">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>jQuery</span>
                                    </div>
                                    <div className="progress-line jquery">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>Python</span>
                                    </div>
                                    <div className="progress-line python">
                                        <span></span>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="info">
                                        <span>MySQL</span>
                                    </div>
                                    <div className="progress-line mysql">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'flexDirection': 'column', 'alignItems': 'center', 'backgroundColor': 'honeydew', 'padding': '10px', 'borderRadius': '20px' }}>
                                <div>Deploys</div>
                                <div style={{ 'display': 'flex', 'flexWrap': 'wrap', 'justifyContent': 'center' }}>
                                    {deploys.map(item =>
                                        <div className="wrapper-card my-1 mx-1" key={item.id}>
                                            <div className="tiles-card root-wrapper-card ach">
                                                <div className="tiles-overlay">

                                                </div>
                                                <div className="tiles-circle">
                                                    <img src={item.image} data-v-5e99277a="" alt="" />
                                                    <p>
                                                        <a href={item.source}>Enter</a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>)}

                                </div>
                            </div>

                            {/* </div> */}

                            <div className="acheive-flex">
                                <div className="wall my-4">
                                    <div className="stage">
                                        <div className="wrapper-text">
                                            <div className="slash"></div>
                                            <div className="sides">
                                                <div className="side"></div>
                                                <div className="side"></div>
                                                <div className="side"></div>
                                                <div className="side"></div>
                                            </div>
                                            <div className="text-acheive">
                                                <div className="text--backing">Acheivements</div>
                                                <div className="text--left">
                                                    <div className="inner">Acheivements</div>
                                                </div>
                                                <div className="text--right">
                                                    <div className="inner">Acheivements</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="title-flex-course">
                                    <div className="course-comp">

                                        {providers.map((item) =>
                                            <div className="nameofprov" onClick={() => provselect(item) } key={item}>{item}</div>
                                        )}
                                    </div>
                                    <div className="certificates my-10">
                                        {certificates[changeprov].map((item) =>
                                            <div className="wrapper-card my-1 mx-1" key={item.id}>
                                                <div className="tiles-card root-wrapper-card ach" >
                                                    <div className="tiles-overlay">

                                                    </div>
                                                    <div className="tiles-circle" style={{ 'backgroundColor': 'bisque' }}>
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
                                <div className="slider">
                                    <input type="radio" name="slide_switch" id="id1" checked="checked" readOnly />
                                    <label htmlFor="id1">
                                        <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" width="50" alt='' />
                                    </label>
                                    <img src="http://thecodeplayer.com/uploads/media/3yiC6Yq.jpg" alt=''/>

                                    <input type="radio" name="slide_switch" id="id2"  />
                                    <label htmlFor="id2">
                                        <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" alt='' width="50" />
                                    </label>
                                    <img src="http://thecodeplayer.com/uploads/media/40Ly3VB.jpg" alt='' />


                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="slider-body">

                        <div className="top-container-slider">
                            🖐That's All Folks!!😀
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

