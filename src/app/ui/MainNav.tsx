export default function MainNav() {
  return (
    <nav className="w-full h-20 bg-red-100 flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex gap-10">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Aventuras</a>
          </li>
          <li>
            <a href="#">Etiquetas</a>
          </li>
          <li>
            <a href="#">Sobre Mi</a>
          </li>
        </ul>
      </div>
      <div>
        <h1>UserStats TODO</h1>
      </div>
    </nav>
  );
}
