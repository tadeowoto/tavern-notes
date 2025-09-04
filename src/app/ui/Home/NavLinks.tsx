import Link from "next/link";

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
          <li key={route.name}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
