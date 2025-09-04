import { merriweather, cinzel } from "@/lib/fonts";

export default function WelcomeSection() {
  return (
    <section className="w-full h-96 bg-bg flex items-center justify-center flex-col gap-4">
      <h1 className={`text-5xl ${cinzel.className} `}>
        Bienvenido a la bitácora de mis aventuras
      </h1>
      <p className={`text-xl text-muted ${merriweather.className}`}>
        Aca podes ver todas mis notas sobre lenguas de programación que he
        estado aprendiendo. Espero que te guste!
      </p>
    </section>
  );
}
