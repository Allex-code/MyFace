"use client"

import { useRouter } from "next/navigation"

export default function About() {
  const router = useRouter();

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <button onClick={router.back} >Back</button>
    </div>
  )
}