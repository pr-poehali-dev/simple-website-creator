
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechCard from "@/components/TechCard";

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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Популярные Python фреймворки</h2>
        
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
        
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Почему Python для веб-разработки?</h2>
          <div className="bg-card p-8 rounded-lg shadow">
            <p className="mb-4">Python - мощный и простой в освоении язык программирования, который отлично подходит для веб-разработки по многим причинам:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Простой и понятный синтаксис</li>
              <li>Богатая экосистема библиотек и фреймворков</li>
              <li>Активное сообщество разработчиков</li>
              <li>Отличная документация и обучающие материалы</li>
              <li>Высокая производительность при правильном использовании</li>
            </ul>
            <img 
              src="/placeholder.svg" 
              alt="Python программирование" 
              className="w-full h-64 object-cover rounded-md mt-6"
            />
          </div>
        </section>
      </main>
      
      <footer className="bg-primary text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Python Web. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
