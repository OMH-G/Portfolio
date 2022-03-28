import React from 'react'
import '../static/css/skills.css'
export const Skill = () => {
    const a = [
        {
            'name': 'HTML',
            'image': 'https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png',
            'star':4
        },
        {
            'name': 'CSS',
            'image': 'https://juststickers.in/wp-content/uploads/2014/05/CSS3-Mark-Shape-Cut.png',
            'star':4
        },
        {
            'name': 'C++',
            'image': 'https://www.quantumversity.com/wp-content/uploads/2020/11/c-plus-plus.png',
            'star':4
        },
        {
            'name': 'Python',
            'image': 'https://sonhasoftware.com/wp-content/uploads/2021/07/python.png',
            'star':4
        },
        {
            'name': 'MySQL',
            'image': 'https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png',
            'star':4
        },
        {
            'name': 'Git',
            'image': 'https://iconape.com/wp-content/png_logo_vector/git-icon.png',
            'star':4
        },
    ]
    function displaystars(star){
        let d=[]
        for(let i=0;i<5;i++){
            if(i<star){
                d.push(<span class="star-icon filled">★</span>)
            }
            else{
                d.push(<span class="star-icon">★</span>)
            }
        }
        return d;
    }
    return (
        <>
            <bodya>
                {
                    a.map((item) => {
                        return <> <div class="containerskill" key={item.name}>
                            <div class="cards">
                                <div class="image">
                                    <img src={item.image} />
                                    <div id="skillname">{item.name}</div>

                                </div>
                                <div class=" content">
                                    {
                                        displaystars(item.star).map((item)=>{
                                            return item
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                        </>
                    })


                }
            </bodya>
        </>
    )
}

