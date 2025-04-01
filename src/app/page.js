"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [userID, setUserID] = useState("");
  const router = useRouter();

  function navigate() {
    router.push("/user/" + userID)
  }
 
  return (
    <div className="text-5x1 m-2" >
      <nav className="navbar">
        <div className="left-nav text-5x1 m-2">
          <Link className="m-2" href="/">Home</Link>
          <Link className="m-2" href="/user/Alex">Alex</Link>
          <Link className="m-2" href="tic-tac-toe">Tic Tac Toe</Link>
          <Link className="m-2" href="/contact">Contact</Link>
          <Link className="m-2" href="/about">About</Link>
        </div>
        <div className="midle-nav text-5x1 m-2"></div>
        <div className="right-nav text-5x1 m-2">
          <input 
            className="bg-gray-50 border ml-4 border-gray-300 pl-2 pr-2 text-gray-1000 text-sm rounded-lg focus:ring-blue-500"
            type="text" 
            placeholder="user id" 
            value={userID} 
            onChange={(e) => setUserID(e.target.value)}
          />
          <button className="text-5x1 ml-4 button" onClick={navigate}> Go to user Profile</button>
        </div>
      </nav>
      <h1 className="ml-4" >HomePage</h1>
    </div>
  );
}
