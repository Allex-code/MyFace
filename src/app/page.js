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
    <div>
      <nav className="navbar">
        <div className="left-nav">
          <Link href="/">Home</Link>
          <Link href="/user/Alex">Alex</Link>
          <Link href="tic-tac-toe">Tic Tac Toe</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
        </div>
        <div className="midle-nav"></div>
        <div className="right-nav">
          <input 
            type="text" 
            placeholder="user id" 
            value={userID} 
            onChange={(e) => setUserID(e.target.value)}
          />
          <button onClick={navigate}> Go to user Profile</button>
        </div>
      </nav>
      <h1>Home</h1>
    </div>
  );
}
