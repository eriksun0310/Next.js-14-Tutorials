"use client";
//client component

import { useState } from "react";
export default function DashboardPage() {
  const [name, setName] = useState("");
  console.log('DashboardPage')
  return (
    <div>
      <h1>Dashboard Page</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}!</p>
    </div>
  );
}
