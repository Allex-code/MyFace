"use client"

import { useRouter } from "next/navigation"
import { useState } from "react";
import "./tictac.css"

function Square({value, onPress}) {
  return (
    <div>
      <button className="square" onClick={onPress}>
        {value}
      </button>
    </div>
  )
}

function Board({squares, xIsNext, onPlay}) {

  function onSquareClick(idx) {
    if(squares[idx] || calculateWinner(squares)) return;

    const nextSquares = [...squares];
    nextSquares[idx] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares)

  return (
    <>
      <div className="board-row flex">
        <Square value={squares[0]} onPress={()=> onSquareClick(0)}/>
        <Square value={squares[1]} onPress={()=> onSquareClick(1)}/>
        <Square value={squares[2]} onPress={()=> onSquareClick(2)}/>
      </div>
      <div className="board-row flex">
        <Square value={squares[3]} onPress={()=>  onSquareClick(3)}/>
        <Square value={squares[4]} onPress={()=>  onSquareClick(4)}/>
        <Square value={squares[5]} onPress={()=>  onSquareClick(5)}/>
      </div>
      <div className="board-row flex">
        <Square value={squares[6]} onPress={()=> onSquareClick(6)}/>
        <Square value={squares[7]} onPress={()=> onSquareClick(7)}/>
        <Square value={squares[8]} onPress={()=> onSquareClick(8)}/>
      </div>
      <div>
        {winner ? (
          <p> Winner is: {winner}</p>
        ) : (
          <p> Next Player: {xIsNext ? "X" : "O"} </p>
        )}
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      console.log(squares[a])
      console.log(squares[b])
      return squares[a];
    }
  }
  return null;
}


export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
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
      description = "Go to game"
    }
    return (
      <li key={move + Math.random()}>
        <button onClick={()=>jumpTo(move)}>{description}</button>  
      </li>
    );
  })
  
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-500 p-2"  >
        <h1 className="text-white  ">Tic Tac Toe</h1>
      </div>
      <div className="board-wrapper">
        <div className="board">
          <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay}/>
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  )
}