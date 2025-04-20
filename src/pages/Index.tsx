
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechCard from "@/components/TechCard";
import { Button } from "@/components/ui/button";

const technologies = [
  {
    title: "Django",
    description: "Полнофункциональный фреймворк для создания сложных веб-приложений с богатым набором встроенных возможностей.",
    imagePath: "/placeholder.svg"
  },
  {
    title: "Flask",
    description: "Легковесный и гибкий микрофреймворк, который дает разработчику полный контроль над архитектурой приложения.",
    imagePath: "/placeholder.svg"
  },
  {
    title: "FastAPI",
    description: "Современный высокопроизводительный фреймворк для разработки API с автоматической генерацией документации.",
    imagePath: "/placeholder.svg"
  }
];

const steps = [
  {
    number: "01",
    title: "Установка Python",
    description: "Начните с установки Python на ваш компьютер. Убедитесь, что вы установили версию 3.6 или выше."
  },
  {
    number: "02",
    title: "Выбор фреймворка",
    description: "Выберите веб-фреймворк, который лучше всего подходит для вашего проекта. Django, Flask или FastAPI."
  },
  {
    number: "03",
    title: "Создание проекта",
    description: "Создайте структуру проекта и настройте виртуальное окружение для изоляции зависимостей."
  },
  {
    number: "04",
    title: "Разработка сайта",
    description: "Разработайте ваш сайт, создавая модели данных, представления и шаблоны для отображения контента."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Популярные Python фреймворки</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Python предлагает множество фреймворков для веб-разработки, каждый со своими преимуществами и особенностями.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <TechCard 
                key={index}
                title={tech.title}
                description={tech.description}
                imagePath={tech.imagePath}
              />
            ))}
          </div>
        </section>
        
        <section className="bg-python-blue/5 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Как создать сайт на Python</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Следуйте этим простым шагам, чтобы создать свой первый веб-сайт с использованием Python.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-python-blue font-bold text-2xl mb-3">{step.number}</div>
                  <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button className="bg-python-blue hover:bg-python-blue/90">
                Подробное руководство
              </Button>
            </div>
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Почему Python для веб-разработки?</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Python - мощный и простой в освоении язык программирования, который отлично подходит для веб-разработки по многим причинам:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-python-blue">✓</span>
                    <span>Простой и понятный синтаксис, удобный для новичков</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-python-blue">✓</span>
                    <span>Богатая экосистема библиотек и фреймворков для веб-разработки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-python-blue">✓</span>
                    <span>Активное сообщество разработчиков и обширная документация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-python-blue">✓</span>
                    <span>Отличная интеграция с базами данных и сторонними сервисами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-python-blue">✓</span>
                    <span>Высокая скорость разработки и поддержки проектов</span>
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">Узнать больше</Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Python программирование" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        <section className="bg-python-dark text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы начать свой путь в Python веб-разработке?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам разработчиков, которые уже используют Python для создания современных веб-приложений!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-python-blue hover:bg-python-blue/90">
                Начать обучение
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Скачать материалы
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-python-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-b.svg" alt="Python" className="h-8 w-8 invert" />
                <span className="text-xl font-bold">PythonWeb</span>
              </div>
              <p className="text-white/70">
                Ваш гид в мире веб-разработки на Python
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ссылки</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Главная</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Фреймворки</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Уроки</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/70 hover:text-white">Документация</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Блог</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Сообщество</a></li>
                <li><a href="#" className="text-white/70 hover:text-white">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Подписаться</h3>
              <p className="text-white/70 mb-4">
                Получайте новости и обновления о мире Python
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="px-3 py-2 bg-white/10 rounded-l-md w-full outline-none focus:bg-white/20 transition-colors"
                />
                <Button className="rounded-l-none bg-python-yellow text-python-dark hover:bg-python-yellow/90">
                  ОК
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
            <p>© 2023 PythonWeb. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
