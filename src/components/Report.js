import React from 'react'
import '../static/css/Report.css'
import { useState } from 'react';
export default function Report() {
    const [emoji, setemoji] = useState("");
    const [suggest, setsuggest] = useState("");
    const cemoji=(val)=>{
        setemoji(val);
    }
    const suggesty=(val)=>{
        setsuggest(val);
    }
    function sub(){
        console.log(emoji);
        console.log(suggest);
    }
    return (
        <>
            <div className="taken">
                <div className="card-do">
                    <h4>Bug Fixing | Suggestion </h4>
                    <div class="form-group">
                        <label for="feedbackform">Example textarea</label>
                        <textarea class="form-control" id="feedbackform" rows="3" placeholder="Suggestion" onChange={(val)=>{suggesty(val.target.value)}}></textarea>
                    </div>
                    <div className="rating-container">
                        <small>Interested then rate it !!!</small>
                        <div class="body-emoji">
                            <div class="app">

                                <div class="container-emoji">

                                    <div class="item" onClick={()=>cemoji("sad")}>
                                        <label for="1">
                                            <input class="radio" type="radio" name="feedback" id="1" value="1" />
                                            <span>🙁</span>
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("noob")}>
                                        <label for="2">
                                            <input class="radio" type="radio" name="feedback" id="2" value="2" />
                                            <span>😶</span>
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("mhappy")}>
                                        <label for="3">
                                            <input class="radio" type="radio" name="feedback" id="3" value="3" />
                                            <span>😁</span>
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("ehappy")}>
                                        <label for="4">
                                            <input class="radio" type="radio" name="feedback" id="4" value="4" />
                                            <span>😍</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn" onClick={()=>sub()}>Submit</button>
                </div>
            </div>
        </>
    )
}
