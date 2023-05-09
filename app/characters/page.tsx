import React from "react";
import getAllChars from "../lib/getAllChars";
import Link from "next/link";

type Props = {};

export default async function Characters() {
  const allChars: Promise<getAllChars> = getAllChars();

  const chars = await allChars;

  const content = (
       <section className="grid grid-cols-4 grid-rows-3 items-center justify-center gap-3 w-auto mx-2">
      {chars.results.map((users) => {
        return (
          <Link href={`/characters/${users.id}`}>
          <div>
            <div className="card w-auto bg-base-100 shadow-xl">
              <figure>
                <img
                  className=" mt-3 rounded-lg"
                  src={users.image}
                  alt="image"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {users.name}
                  <div className="badge badge-secondary">{users.status}</div>
                  {
                    (users.status === "Alive" ? (
                      <div className="rounded-full bg-green-500 p-2 shadow-md shadow-green-500"></div>
                    ) : (
                      <div className="rounded-full bg-red-500 p-2 shadow-md shadow-red-500"></div>
                    ))
                  }
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{users.species}</div>
                  <div className="badge badge-outline">{users.gender}</div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        );
      })}
    </section> 

  );
  return content;
}




