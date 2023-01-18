import React from "react";
import Card from "../Card/Card";

const CardList = ({games,routeChange}) => {
    const nizIgrica = games.map(el=>{
        return <Card key={el.id.toString()} name={el.name} img={el.img} routeChange={routeChange}/>
    })
    
    return(
        <div style={{margin:'auto', display:'flex', justifyContent:'center',flexWrap:'wrap'}}>
            {nizIgrica}
        </div>
    );
}

export default CardList;