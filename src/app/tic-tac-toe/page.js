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

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function onSquareClick(idx) {
    const newSquares = [...squares]
    newSquares[idx] = "X"
    setSquares(newSquares)
  }

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
    </>
  )
}

export default function Game() {

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-500 p-2"  >
        <h1 className="text-white  ">Tic Tac Toe</h1>
      </div>
      <div className="board">
        <Board/>
      </div>
    </div>
  )
}