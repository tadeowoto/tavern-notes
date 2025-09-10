import { notFound } from "next/navigation";
import { notes } from "@/lib/data";
import { merriweather } from "@/lib/fonts";
import Link from "next/link";

interface NotePageProps {
  params: {
    id: string;
  };
}

function getNoteById(id: number) {
  return notes.find((note) => note.id === id);
}

export default function NotePage({ params }: NotePageProps) {
  const noteId = parseInt(params.id);
  const note = getNoteById(noteId);

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          ← Volver al inicio
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className={`text-4xl font-bold mb-4 ${merriweather.className}`}>
              {note.title}
            </h1>
            <p className={`text-lg text-muted mb-6 ${merriweather.className}`}>
              {note.desc}
            </p>
            <div className="flex gap-3 mb-8">
              {note.lenguages.map((language: string) => (
                <span
                  key={language}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {language}
                </span>
              ))}
            </div>
          </header>
          <div
            className={`prose prose-lg max-w-none ${merriweather.className}`}
          >
            <div className="bg-surface border-2 border-muted p-8 rounded-lg">
              {note.content ? (
                <div
                  dangerouslySetInnerHTML={{ __html: note.content }}
                  className="note-content"
                />
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-4">
                    Contenido del Pergamino
                  </h2>
                  <p className="text-muted mb-4">
                    Este es el contenido detallado de la nota &quot;{note.title}
                    &quot;.
                  </p>
                  <p className="text-muted">
                    Aquí puedes expandir con el contenido completo de cada nota,
                    incluyendo ejemplos de código, explicaciones detalladas, y
                    recursos adicionales.
                  </p>
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: NotePageProps) {
  const noteId = parseInt(params.id);
  const note = getNoteById(noteId);

  if (!note) {
    return {
      title: "Nota no encontrada",
    };
  }

  return {
    title: `${note.title} | Tavern Notes`,
    description: note.desc,
  };
}

// Generar rutas estáticas en build time (opcional)
export async function generateStaticParams() {
  return notes.map((note) => ({
    id: note.id.toString(),
  }));
}
