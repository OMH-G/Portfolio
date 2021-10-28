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
                            </div>
                            <div className="info-flip-card-back">

                            </div>

                        </div>
                    </div>
                    <div className="l-info-container">
                        <div className="info-content v4">
                            <p>I dont' know dude, May be this could be important, May be not, who knows? I don't know, Do you know? Do you know somebody that knows this maybe, call me maybe.</p>
                        </div>

                    </div>

                </div>
            </div>

        </>
    )
}

