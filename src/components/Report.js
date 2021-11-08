import React from 'react'
import '../static/css/Report.css'
export default function Report() {
    return (
        <>
            <div className="taken">
                <div className="card-do">
                    <h4>Bug Fixing | Suggestion </h4>
                    <div class="form-group">
                        <label for="feedbackform">Example textarea</label>
                        <textarea class="form-control" id="feedbackform" rows="3" placeholder="Suggestion"></textarea>
                    </div>
                    <div className="rating-container">
                        <small>Eager then Rate it !</small>
                        <div class="body-emoji">
                            <div class="app">

                                <div class="container-emoji">

                                    <div class="item">
                                        <label for="1">
                                            <input class="radio" type="radio" name="feedback" id="1" value="1" />
                                            <span>🙁</span>
                                        </label>
                                    </div>

                                    <div class="item">
                                        <label for="2">
                                            <input class="radio" type="radio" name="feedback" id="2" value="2" />
                                            <span>😶</span>
                                        </label>
                                    </div>

                                    <div class="item">
                                        <label for="3">
                                            <input class="radio" type="radio" name="feedback" id="3" value="3" />
                                            <span>😁</span>
                                        </label>
                                    </div>

                                    <div class="item">
                                        <label for="4">
                                            <input class="radio" type="radio" name="feedback" id="4" value="4" />
                                            <span>😍</span>
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn">Submit</button>
                </div>
            </div>
        </>
    )
}
