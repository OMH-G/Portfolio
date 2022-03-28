import React from 'react'
import '../static/css/Info.css'
import { useState, useEffect } from 'react';
const axios = require('axios');
export default function Info() {
    var providers = ['coursera', 'IBM'];
    const [cert, setcert] = useState({});
    const [value, setvalue] = useState([]);
    useEffect(() => {
        axios.get('https://mongodbportfolioapi.herokuapp.com/')
            .then(data => {
                setcert(data.data[1].certificates);
                setvalue(data.data[1].certificates['coursera'])
            })
    }, [])

    var deploys = [
        {
            id: 1,
            image: 'https://www.inlifehealthcare.com/wp-content/uploads/2016/03/To-Do-List.png',
            source: 'https://todoapplistvslist.herokuapp.com/'
        },
        {
            id: 2,
            image: 'https://cdn-icons-png.flaticon.com/512/1457/1457806.png',
            source: 'https://bankrupthone.herokuapp.com'
        },

    ]

    const [changeprov, setchangeprov] = useState("coursera");
    function provselect(value) {
        setchangeprov(value);
        setvalue(cert[value]);
    }
    const displaycert = () => {
        if (value.length === 0) {
            return <>
            <div className="spinnerc">
            <div className="spinner-grow a" role="status">
                    <span className="visually-hidden " >Loading...</span>
                </div>
            </div>
                
            </>
        }
        else {
            return <><div className="title-flex-course">
                <div className="course-comp">

                    {providers.map((item) =>
                        <div className="nameofprov" onClick={() => provselect(item)} key={item}>{item}</div>
                    )}
                </div>
                <div className="certificates my-10">
                    {value.map((item) =>
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
            </>

        }
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
                                {displaycert()}


                                <div className="image-slider">
                                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-indicators">
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src="https://source.unsplash.com/random/?city,night" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://source.unsplash.com/random/?water,night" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="https://source.unsplash.com/random/?space,night" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
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

