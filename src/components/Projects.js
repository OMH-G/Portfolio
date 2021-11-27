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
               <div style={{'width':'fit-content','marginLeft':'auto','marginRight':'auto'}}>Github Repositories</div>
                <div className="container">
                    {generalrepo.map((item) => {
                        return (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div className="name">{item.name}📁</div>
                                        <div className="videoWrapper">
                                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lTTajzrSkCw?rel=0&autoplay=1&controls=0&loop=1&mute=1&playlist=lTTajzrSkCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <div className="updated" >
                                            {item['updated_at']}
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        &copy;Github📚
                                        <p  style={{'marginBottom':'0px'}}>{item.full_name}📜</p>
                                        <p style={{'marginBottom':'0px'}}>✨{item.name}📁</p>
                                        <a rel="noreferrer" target="_blank"href={`${item.html_url}`} className="cardfoot" >
                                            Tap Me! 🌀
                                        </a>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
                <div style={{'width':'fit-content','marginLeft':'auto','marginRight':'auto'}}>Internship</div>
                <div className="container">
                    {internship.map((item) => {
                        return (
                            <div className="flip-card" key={item.id}>
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <div >{item.name}📁</div>
                                        <div className="videoWrapper">
                                            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lTTajzrSkCw?rel=0&autoplay=1&controls=0&loop=1&mute=1&playlist=lTTajzrSkCw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>
                                        <div className="updated" >
                                            {item['updated_at']}
                                        </div>
                                    </div>
                                    <div className="flip-card-back">
                                        &copy;Github(Internship)📓
                                        <p  style={{'marginBottom':'0px'}}>{item.full_name}📜</p>
                                        <p style={{'marginBottom':'0px'}}>✨{item.name}📁</p>
                                        <a rel="noreferrer" target="_blank"href={`${item.html_url}`} className="cardfoot" >
                                            Tap Me! 🌀
                                        </a>
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
            <div className="d-flex align-items-center flex-column">
                Github Repositories
                <div className="card" aria-hidden="true">
                    <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    </div>
                </div>
                Internship
                <div className="card" aria-hidden="true">
                    <div className="card-body">
                    <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                    </p>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
