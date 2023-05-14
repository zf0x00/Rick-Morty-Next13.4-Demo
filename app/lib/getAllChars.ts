import React from "react";

export default async function getAllChars() {
  const res = await fetch(`https://rickandmortyapi.com/api/character`);

  if (!res.ok) return undefined
  return res.json();
}
