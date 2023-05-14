
export default async function getSearch(searchTerms:string) {

    const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchTerms}`)

    if(!res.ok) return undefined
  return res.json()

}
