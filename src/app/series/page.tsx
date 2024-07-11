import rawData from "@/data.json";
import Image from "next/image";

export interface Item {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    };
  };
  releaseYear: number;
}

const data = (rawData.entries as Item[])
  .filter((item) => item.releaseYear >= 2010 && item.programType === "series")
  .slice(0, 21)
  .sort((a, b) => a.title.localeCompare(b.title));

export default function SeriesPage() {
  return (
    <section className="grid gap-4">
      <article className="bg-slate-800 py-2 text-xl text-white shadow-md">
        <div className="m-auto max-w-screen-md px-4">Popular Series</div>
      </article>
      <article className="m-auto max-w-screen-md p-4">
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {data.map((item) => (
            <div key={item.title} className="grid gap-2">
              <Image
                src={item.images["Poster Art"].url}
                alt={item.title}
                width={item.images["Poster Art"].width}
                height={item.images["Poster Art"].height}
              />
              <p className="leading-5">{item.title}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
