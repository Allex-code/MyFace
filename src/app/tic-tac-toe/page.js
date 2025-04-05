"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import "./tictac.css"

// Square either for an X or O
function Square({value, onPress}) {
  return (
    <>
      <button className="square" onClick={onPress}>
        {value}
      </button>
    </>
  )
}

// Playing grid
// squares = array keeping track of what is placed where
// xIsNexk = Boolen who is playing, onPlay
function Board({squares, xIsNext, onPlay}) {


  function onSquareClick(idx) {
    if(squares[idx] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[idx] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <>
        <div className="board-row flex">
          <Square value={squares[0]} onPress={()=> onSquareClick(0)}/>
          <Square value={squares[1]} onPress={()=> onSquareClick(1)}/>
          <Square value={squares[2]} onPress={()=> onSquareClick(2)}/>
          <Square value={squares[3]} onPress={()=>  onSquareClick(3)}/>
          <Square value={squares[4]} onPress={()=>  onSquareClick(4)}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[5]} onPress={()=>  onSquareClick(5)}/>
          <Square value={squares[6]} onPress={()=> onSquareClick(6)}/>
          <Square value={squares[7]} onPress={()=> onSquareClick(7)}/>
          <Square value={squares[8]} onPress={()=> onSquareClick(8)}/>
          <Square value={squares[9]} onPress={()=> onSquareClick(9)}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[10]} onPress={()=> onSquareClick(10)}/>
          <Square value={squares[11]} onPress={()=> onSquareClick(11)}/>
          <Square value={squares[12]} onPress={()=> onSquareClick(12)}/>
          <Square value={squares[13]} onPress={()=> onSquareClick(13)}/>
          <Square value={squares[14]} onPress={()=> onSquareClick(14)}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[15]} onPress={()=> onSquareClick(15)}/>
          <Square value={squares[16]} onPress={()=> onSquareClick(16)}/>
          <Square value={squares[17]} onPress={()=> onSquareClick(17)}/>
          <Square value={squares[18]} onPress={()=> onSquareClick(18)}/>
          <Square value={squares[19]} onPress={()=> onSquareClick(19)}/>
        </div>
        <div className="board-row flex">
          <Square value={squares[20]} onPress={()=> onSquareClick(20)}/>
          <Square value={squares[21]} onPress={()=> onSquareClick(21)}/>
          <Square value={squares[22]} onPress={()=> onSquareClick(22)}/>
          <Square value={squares[23]} onPress={()=> onSquareClick(23)}/>
          <Square value={squares[24]} onPress={()=> onSquareClick(24)}/>
        </div>
    </>
  );
}

function calculateWinner(squares) {
  // All winning combinations
  const lines = [
    //horizontal
    [0,1,2,3], [1,2,3,4],
    [5,6,7,8], [6,7,8,9],
    [10,11,12,13], [11,12,13,14],
    [15,16,17,18], [16,17,18,19],
    [20,21,22,23], [21,22,23,24],
    // Vertical
    [0,5,10,15], [5,10,15,20],
    [1,6,11,16], [6,11,16,21],
    [2,7,12,17], [7,12,17,22],
    [3,8,13,18], [8,13,18,23],
    [4,9,14,19], [9,14,19,24],
    // Diagonal (Top-Left to Bottom-Right)
    [0,6,12,18], [6,12,18,24],
    [1,7,13,19], [5,11,17,23],
    // Diagonal (Top-Right to Bottom-Left)
    [4,8,12,16], [8,12,16,20],
    [3,7,11,15], [9,13,17,21]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c,d] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c] && squares[c] === squares[d]) {
      console.log(squares[a])
      console.log(squares[b])
      return squares[a];
    }
  }
  return null;
}


export default function Game() {
  const [history, setHistory] = useState([Array(25).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to clear board"
    }
    return (
      <li key={move + Math.random()}>
        <button className="inline-flex items-center rounded-md bg-green-100 px-2 py-2 text-s font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset" onClick={()=>jumpTo(move)}>{description}</button>  
      </li>
    );
  })
  
  const winner = calculateWinner(currentSquares)


  return (
    <div>
      <div className="flex items-center justify-center bg-gray-500 p-2"  >
        <h1 className="text-white  ">Tic Tac Toe</h1>
      </div>
      <div className="flex">
  
        <div className="game-info">
          <ol className="moves" >{moves}</ol>
        </div>

        <div className="board-frame">
          <div className="board">
            <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
          </div>
        </div>
        <div className="is-">
        {winner ? (
          <p className="winner inline-flex items-center   px-2 py-2 text-s font-medium  ring-2 ring-gray-500/10 ring-inset" > Winner is: {winner}</p>
        ) : (
          <p> Next Player: {xIsNext ? "X" : "O"} </p>
        )}
        </div>
      </div>
    </div>
  )
}
