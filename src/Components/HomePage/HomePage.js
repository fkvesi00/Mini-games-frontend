import React from "react";
import {games} from '../../games';
import CardList from "./CardList/CardList";
import './HomePage.css';
import SearchBox from "./SearchBox/SearchBox";


class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          input:'',
        }
    }
  

  onSearchChange = (event) =>{
    this.setState({input:event.target.value})
  }



    render(){
        const filterGames = games.filter(el => {
            return el.name.toLowerCase().includes(this.state.input.toLocaleLowerCase());
        })
        return(
            <div className='homePage'>
                <p style={{display:'flex',justifyContent:'center'}}>{`Have fun playing ${this.props.userName}`}</p>
                <SearchBox onSearchChange={this.onSearchChange}/>
        
                <div className='cardList'>
                    <CardList games={filterGames} routeChange={this.props.routeChange}/>
                </div>
            </div>
        );
    }
}

export default HomePage;

/*
<div >Tic Tac Toe </div>
<div onClick={()=>routeChange('game2')}>GAME 2</div> 
*/