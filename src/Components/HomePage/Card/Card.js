import React from "react";

const Card = ({name,img,routeChange}) => {
    return (
            <div  className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 pointer" onClick={()=> routeChange(name)} >
            <div style={{width:'200px', height:'250px'}}>
                <img src={img} alt='roboFriends'/>
            </div>    
                <div style={{background:'lightBlue',padding:'2px'}}>
                    <h2><b>Game:</b> {name}</h2>
                </div>
            </div>
    )
}

export default Card;