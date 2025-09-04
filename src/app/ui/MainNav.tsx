import NavLinks from "./Home/NavLinks";

export default function MainNav() {
  return (
    <nav className="w-full h-20 bg-bg border-b border-muted flex justify-between items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <NavLinks />
      <div>
        <h1>UserStats TODO</h1>
      </div>
    </nav>
  );
}
