import Image from "next/image";
import Link from "next/link";
import getAllApi from "./lib/getAll";
import { type } from "os";

type Props = {};

export default async function Home() {

  const initialLinks: Promise<getAllLinks>= getAllApi();


const getall = await initialLinks

const content = (
  <section className="sm:flex w-full gap-5 items-center py-10 justify-center bg-base-100">
    <div className="card w-96 bg-base-100 shadow-md shadow-purple-400 pt-3 sm:mt-3">
  <figure><img className="rounded-full" src="https://rickandmortyapi.com/api/character/avatar/483.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Characters</h2>
    <p>Ricky Morty Characters</p>
    <div className="card-actions justify-end">
      <Link href='/characters'> <button className="btn btn-primary btn-sm bg-purple-400" >Characters</button>
</Link>
    </div>
  </div>
</div>
{/* Second */}
<div className="card w-96 bg-base-100 shadow-md shadow-purple-400 pt-3">
  <figure><img className="rounded-full" src="https://rickandmortyapi.com/api/character/avatar/483.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Episodes</h2>
    <p>Ricky Morty Episodes</p>
    <div className="card-actions justify-end">
      <Link href='/episodes'> <button className="btn btn-primary btn-sm bg-purple-400" >Episodes</button>
</Link>
    </div>
  </div>
</div>
{/* Third */}
<div className="card w-96 bg-base-100 shadow-md shadow-purple-400 pt-3 sm:pt-3">
  <figure><img className="rounded-full" src="https://rickandmortyapi.com/api/character/avatar/483.jpeg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Locations</h2>
    <p>Ricky Morty Locations</p>
    <div className="card-actions justify-end">
      <Link href='/locations'> <button className="btn btn-primary btn-sm bg-purple-400" >Locations</button>
</Link>
    </div>
  </div>
</div>
  </section>
)

return content

  // return (
  //   <div className=" w-full items-center">
  //     <h1 className=" mt-11 text-center text-2xl text-purple-600">
  //       Homepage Rick and Morty
  //     </h1>
  //     <Link href="/characters" className=" text-center text-xl items-center">
  //       Got to Character
  //     </Link>
  //     <h1>{getall.characters}</h1>
  //   </div>
  // );
}
