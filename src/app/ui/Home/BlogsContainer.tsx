import { merriweather } from "@/lib/fonts";
import { notes } from "@/lib/data";
import NoteCard from "./NoteCard";
import { NoteType } from "@/lib/types";
export default function BlogsContainer() {
  return (
    <section className="w-full h-fit bg-surface flex items-center justify-center flex-col ">
      <h1 className={`text-3xl ${merriweather.className} mt-5`}>
        Pergaminos Destacados
      </h1>
      <div className="w-full h-fit flex items-center justify-center gap-10 flex-wrap p-20">
        {notes.map((note: NoteType) => (
          <NoteCard
            key={note.id}
            title={note.title}
            desc={note.desc}
            lenguages={note.lenguages}
            href={note.href}
          />
        ))}
      </div>
    </section>
  );
}
