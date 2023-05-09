import React from 'react'

export default async function getCharsNow(usersId: string) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${usersId}` , { next:{revalidate:60}})

    if(!res.ok) throw new Error('fetch failed')
  return res.json()
}