import React from 'react'
import '../static/css/Info.css'
export default function Info() {
    return (
        <>
            <div class="three">
                <div style={{ 'alignSelf': 'baseline', 'marginLeft': 'auto', 'marginRight': 'auto' }}>
                    <h1>I am a Web-Developer and <span></span></h1>
                </div>
                <div className="flex-prof-card">
                    <div className="info-content">
                        <div class="two">hi folks, this is typing animation using CSS</div>
                    </div>
                    <div class="profile-flipper">
                        <div class="card">
                            <div class="front">
                                <p>HOVER</p>
                            </div>
                            <div class="back">
                                <p>BACK</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

