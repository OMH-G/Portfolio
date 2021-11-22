import React from 'react'
import '../static/css/Report.css'
import { useState } from 'react';
export default function Report() {
    const [emoji, setemoji] = useState("");
    const [suggest, setsuggest] = useState("");
    const [count, setcount] = useState(0);
    var value;
    const updatelocal=(val)=>{
        if(emoji!==val){
            console.log(emoji,val);
            if(localStorage.getItem(emoji)===null ||localStorage.getItem(emoji)<=0){
                localStorage.setItem(emoji,0);
            }
            else{
            localStorage.setItem(emoji,parseInt(localStorage.getItem(emoji))-1);
            
            }setcount(1);
        }
        if(count===1){
        if(localStorage.getItem(val)==null){
        localStorage.setItem(val,0);
        }
        else{
            var v=parseInt(localStorage.getItem(val))+1;
            localStorage.setItem(val,v);
        }
        setcount(-1);
    }
    }
    const cemoji=(val)=>{
        setemoji(val);
        if(count===0){
        setcount(1);
        }
        else{
            setcount(-1);
        }
        updatelocal(val);
    }
    const suggesty=(val)=>{
        setsuggest(val);
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
                                            {localStorage.getItem('sad')}
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("noob")}>
                                        <label for="2">
                                            <input class="radio" type="radio" name="feedback" id="2" value="2" />
                                            <span>😶</span>
                                            {localStorage.getItem('noob')}
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("mhappy")}>
                                        <label for="3">
                                            <input class="radio" type="radio" name="feedback" id="3" value="3" />
                                            <span>😁</span>
                                            {localStorage.getItem('mhappy')}
                                        </label>
                                    </div>

                                    <div class="item" onClick={()=>cemoji("ehappy")}>
                                        <label for="4">
                                            <input class="radio" type="radio" name="feedback" id="4" value="4" />
                                            <span>😍</span>
                                            {localStorage.getItem('ehappy')}
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn" >Submit</button>
                </div>
            </div>
        </>
    )
}
