import React,{Component} from "react";
import Board from "./Board/Board";
import './game.css';

class Game extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        history: [{
          squares:Array(9).fill(null),
        }],
        xIsNext:true
      }
    }

    isGameOver (squares) {
      const niz = squares.filter(x=> {
        return x===null
      })
      return niz.length>0?true:false;
    }

    resetGame(){
      const squares = Array(9).fill(null)
      this.setState({
        history:[{
          squares:squares
        }]
      })
    }

    handleClick(i){
      const history = this.state.history.slice();
      const current = history[history.length-1];
      const squares = current.squares.slice();
      /* Ovdje zabranjujemo ponovni klik na polje, tj. ponovnim klikom squares[i] u sljedecem if-u budu true i zavrsava handleClick prije promjene ikakvog stanja*/
      if (this.calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i]=this.state.xIsNext? 'X' : 'O';
      this.setState({
        history:history.concat([{
          squares:squares
        }]),
        xIsNext: !this.state.xIsNext,
      })
    }
    
    calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }

    render() {
      const history = this.state.history;//spremamo cijeli niz koji sadrzi objekte, koji sadrze nizove squares
      const current = history[history.length-1];//spremamo posljednji objekt/niz iz history-a
      const winner = this.calculateWinner(current.squares);//racunamo pobjednika
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else{
        this.isGameOver(current.squares)?
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
        :
        status = 'Draw';
      }

      return (
        <div className="game">
           <p className="back" onClick={()=>this.props.routeChange('home')}>Back</p>
           <button style={{marginTop:'5px'}} onClick={()=>this.resetGame()}>New game</button>
          <div className="game-board">
            <Board routeChange={this.props.routeChange} onClick={(i)=>this.handleClick(i)} squares={current.squares}/>
          </div>
          <div className="game-info">
            <ol>{/* TODO */}</ol>
            <div className="status">{status}</div>
          </div>
        </div>
      );
    }
}

export default Game;