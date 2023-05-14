import getAllChars from "@/app/lib/getAllChars";
import getCharsNow from "@/app/lib/getChars";
import type { Metadata } from "next";
import { type } from "os";
import { notFound } from "next/navigation";

type PramsProps = {
  params: {
    charid: string;
  };
};

// //Dynamic meta data //Must name the function same
export async function generateMetadata({
  params: { charid },
}: PramsProps): Promise<Metadata> {
  const getChars: Promise<IChars> = getCharsNow(charid);

  const newCharLinks: IChars = await getChars

  if (!newCharLinks?.name) {
    return {
      title: "User Not Found",
    };
  }

  return {
    title: newCharLinks.name,
    description: `This is the page of ${newCharLinks.name}`,
  };
}

export default async function CharPage({ params: { charid } }: PramsProps) {
  const getChars: Promise<IChars> = getCharsNow(charid);

  const chars = await getChars;

  if (!chars?.name) return notFound();

  return (
    <>
      <h1>Character</h1>
      <h2>{chars.name}</h2>
      <h1>{chars.gender}</h1>
    </>
  );
}

export async function generateStaticParams() {
  const allChars: Promise<getAllChars> = getAllChars();

  const newallChars = await allChars;

  return newallChars.results.map((newChar) => ({
    charid: newChar.id.toString(),
  }));
}
