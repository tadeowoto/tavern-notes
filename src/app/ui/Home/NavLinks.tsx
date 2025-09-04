import Link from "next/link";
import { merriweather } from "@/lib/fonts";

export default function NavLinks() {
  const routes = [
    { name: "Inicio", href: "/" },
    { name: "Aventuras", href: "/aventuras" },
    { name: "Etiquetas", href: "/etiquetas" },
    { name: "Sobre Mi", href: "/about" },
  ];

  return (
    <div>
      <ul className="flex gap-5">
        {routes.map((route) => (
          <li
            key={route.name}
            className={`${merriweather.className} font-bold tracking-wider hover:underline hover:underline-offset-4 hover:text-primary transition-all`}
          >
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
