import React from "react";

export default async function getAllChars() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);

  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}
