import React from 'react'
import axios from 'axios'
import '../static/css/projects.css'
import { useState, useEffect } from 'react'
export default function Projects() {
    useEffect(() => {
        componentDidMount();
    }, [])
    const [data, setState] = useState([]);
    function componentDidMount() {
        axios.get('https://api.github.com/users/OMH-G/repos')
            .then((response) => { setState(response) });
    }
    if (data.length !== 0) {
        const store = data.data;
        const generalrepo = [], internship = [];
        for (let i = 0; i < store.length; i++) {
            if (store[i].name === "CodeLength" || store[i].name === "reactproject" || store[i].name === "restframework") {
                generalrepo.push(store[i]);
            }
            else {
                internship.push(store[i]);
            }
        }
        return (
            <>
                Github Repositories
                <div className="container">
                    {console.log(generalrepo)}
                    {generalrepo.map((item) => {
                        return (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="name">{item.name}</div>
                                        <div className="videoWrapper">
                                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lTTajzrSkCw?rel=0&autoplay=1&controls=0&loop=1&mute=1&playlist=lTTajzrSkCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <div className="updated" >
                                            {item['updated_at']}
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        &copy;Project
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                        <div className="cardfoot">
                                            Tap Me!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
                Internship
                <div className="container">
                    {console.log(generalrepo)}
                    {internship.map((item) => {
                        return (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="name">{item.name}</div>
                                        <div className="videoWrapper">
                                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lTTajzrSkCw?rel=0&autoplay=1&controls=0&loop=1&mute=1&playlist=lTTajzrSkCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <div className="updated" >
                                            {item['updated_at']}
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        &copy;Project
                                        <p>Architect & Engineer</p>
                                        <p>We love that guy</p>
                                        <div className="cardfoot">
                                            Tap Me!
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
    else {
        return (
            <>
                Github Repositories
                <div class="card" aria-hidden="true">
                    <div class ="card-body">
                    <h5 class ="card-title placeholder-glow">
                    <span class ="placeholder col-6"></span>
                    </h5>
                    <p class ="card-text placeholder-glow">
                    <span class ="placeholder col-7"></span>
                    <span class ="placeholder col-4"></span>
                    <span class ="placeholder col-4"></span>
                    <span class ="placeholder col-6"></span>
                    <span class ="placeholder col-8"></span>
                    </p>
                    </div>
                </div>
                Internship
                <div class="card" aria-hidden="true">
                    <div class ="card-body">
                    <h5 class ="card-title placeholder-glow">
                    <span class ="placeholder col-6"></span>
                    </h5>
                    <p class ="card-text placeholder-glow">
                    <span class ="placeholder col-7"></span>
                    <span class ="placeholder col-4"></span>
                    <span class ="placeholder col-4"></span>
                    <span class ="placeholder col-6"></span>
                    <span class ="placeholder col-8"></span>
                    </p>
                    </div>
                </div>
            </>
        )
    }
}
