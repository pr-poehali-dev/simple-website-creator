
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <img src="/logo-b.svg" alt="Python" className="h-8 w-8" />
            <span className="text-xl font-bold text-python-blue">PythonWeb</span>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-python-blue transition-colors">
            Главная
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-python-blue transition-colors">
            Фреймворки
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-python-blue transition-colors">
            Уроки
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-python-blue transition-colors">
            Документация
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button className="bg-python-blue hover:bg-python-blue/90">
            Начать изучение
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
