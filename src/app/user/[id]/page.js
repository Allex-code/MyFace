"use client"

import React from "react";
import { useRouter } from "next/navigation"

export default function User({params}) {
  const { id } = React.use(params);
  const router = useRouter();

  return (
    <div>
      <h1>User : {id}</h1>
      <button onClick={router.back}>Back</button>
    </div>
  )
}