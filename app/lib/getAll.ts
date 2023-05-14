
export default async function getAllApi() {

    const res = await fetch('https://rickandmortyapi.com/api') 

    if(!res.ok) return undefined
  return res.json()
}
