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

                    <div class="l-info-container">
                        <h1>DASHES 😎</h1>
                        <div class="content v4">
                            <p>I dont' know dude, May be this could be important, May be not, who knows? I don't know, Do you know? Do you know somebody that knows this maybe, call me maybe.</p>
                        </div>

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

