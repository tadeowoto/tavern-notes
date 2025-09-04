import Image from "next/image";
import { merriweather, cinzel } from "@/lib/fonts";

export default function MainFooter() {
  return (
    <footer className="relative w-full">
      <div className="relative z-20">
        <Image
          src="/icons/guarda.png"
          alt="Imagen de una guarda"
          width={1920}
          height={70}
          className="w-full object-cover"
        />
      </div>

      <div className="relative">
        <Image
          src="/images/bg.webp"
          alt="Fondo del footer"
          width={2600}
          height={1447}
          className="w-full h-[400px] object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className={`${merriweather.className} text-2xl font-bold mb-2`}>
            Gracias por visitar la taberna!
          </h1>
          <p className={`${cinzel.className} text-md font-bold mb-2`}>
            Vuelve cuando quieras
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.github.com/tadeowoto"
              target="_blank"
              className="underline hover:text-primary transition-all"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
