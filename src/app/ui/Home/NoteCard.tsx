import Link from "next/link";
import { merriweather } from "@/lib/fonts";

interface NoteCardProps {
  title: string;
  desc: string;
  lenguages: string[];
  href: string;
}

export default function NoteCard({
  title,
  desc,
  lenguages,
  href,
}: NoteCardProps) {
  return (
    <Link
      href={href}
      className="w-95 h-40 p-8 flex flex-col items-start justify-center gap-2 bg-transparent border-2 border-muted hover:border-primary transition-all duration-100"
    >
      <h1 className={`text-xl ${merriweather.className}`}>{title}</h1>
      <p className={`text-sm text-muted ${merriweather.className}`}>{desc}</p>
      <div className="flex gap-3">
        {lenguages.map((lenguage: string) => (
          <p
            key={lenguage}
            className={`text-sm text-primary ${merriweather.className}`}
          >
            {lenguage}
          </p>
        ))}
      </div>
    </Link>
  );
}
