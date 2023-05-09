
export default async function getAllApi() {

    const res = await fetch('https://rickandmortyapi.com/api') 

    if(!res.ok) throw new Error("fetch get All Failed")
  return res.json()
}
