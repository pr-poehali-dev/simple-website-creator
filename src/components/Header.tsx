
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary text-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <img src="/logo-b.svg" alt="Логотип" className="w-10 h-10" />
          <span>Python Web</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-accent-foreground transition">Главная</Link></li>
            <li><Link to="/" className="hover:text-accent-foreground transition">Инструменты</Link></li>
            <li><Link to="/" className="hover:text-accent-foreground transition">О проекте</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
