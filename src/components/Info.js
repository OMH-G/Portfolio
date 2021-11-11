import React from 'react'
import '../static/css/Info.css'
export default function Info() {
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
                <div style={{'display':'flex','flexWrap':'wrap','flexDirection':'column','alignItems':'center','backgroundColor':'honeydew','padding':'10px','borderRadius':'20px'}}>
                <div>Deploys</div>
                <div style={{'display':'flex','flexWrap':'wrap','justifyContent':'center'}}>
                <div class="wrapper-card my-1 mx-1">
                <div class="tiles-card root-wrapper-card">
                    <div class="tiles-overlay">

                    </div>
                    <div class="tiles-circle">
                    <img src="https://www.inlifehealthcare.com/wp-content/uploads/2016/03/To-Do-List.png" data-v-5e99277a=""/>
                    <p>
                        <a href="https://todoapplistvslist.herokuapp.com/">Enter</a>
                    </p>
                    </div>
                </div>
                </div>

                <div class="wrapper-card my-1 mx-1">
                <div class="tiles-card root-wrapper-card">
                    <div class="tiles-overlay">

                    </div>
                    <div class="tiles-circle">
                    <img src="https://cdn-icons-png.flaticon.com/512/1457/1457806.png" data-v-5e99277a=""/>
                    <p>
                        <a href="https://bankrupthone.herokuapp.com/">Enter</a>
                    </p>
                    </div>
                </div>
                </div>

                </div>
                </div>
                </div>
                    </div>

                </div>
            </div>

        </>
    )
}

