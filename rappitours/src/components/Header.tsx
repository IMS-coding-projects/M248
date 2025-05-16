import {ModeToggle} from "@/components/mode-toggle.tsx";
import logo from '/default_logo.svg';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-secondary text-primary">
        <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} />
        <h1 className="text-2xl font-bold">Rappitours</h1>
      <ModeToggle/>
    </header>
  );
}

export default Header;