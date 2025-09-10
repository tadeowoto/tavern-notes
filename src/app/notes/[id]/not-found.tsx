import Link from "next/link";
import { merriweather } from "@/lib/fonts";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className={`text-6xl font-bold text-primary mb-4 ${merriweather.className}`}>
            404
          </h1>
          <h2 className={`text-2xl font-semibold mb-4 ${merriweather.className}`}>
            Pergamino No Encontrado
          </h2>
          <p className={`text-muted mb-8 max-w-md mx-auto ${merriweather.className}`}>
            El pergamino que buscas parece haberse perdido en las profundidades de la taberna. 
            Quizás fue llevado por algún aventurero o simplemente nunca existió.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            Volver al Inicio
          </Link>
          <Link
            href="/aventuras"
            className="px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
          >
            Ver Aventuras
          </Link>
        </div>
      </div>
    </div>
  );
}
