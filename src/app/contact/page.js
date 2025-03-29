"use client"

import { useRouter } from "next/navigation"

export default function Contact() {
  const router = useRouter();
  
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={router.back}>Back</button>
    </div>
  )
}