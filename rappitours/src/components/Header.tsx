import {ModeToggle} from "@/components/mode-toggle.tsx";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-secondary text-primary">
      <h1 className="text-2xl font-bold">Rappitours</h1>
      <ModeToggle/>
    </header>
  );
}

export default Header;