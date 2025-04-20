
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-muted py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Создавайте мощные веб-сайты с Python
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Изучите, как разрабатывать современные веб-приложения с использованием Python и его
              популярных фреймворков. От простых сайтов до сложных веб-приложений.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-python-blue hover:bg-python-blue/90">
                Учебные материалы
              </Button>
              <Button variant="outline">
                Документация
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 rounded-lg overflow-hidden border bg-card shadow-xl">
            <div className="code-block">
              <pre>
{`# Простой веб-сервер на Flask
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', 
                          title='Python Web')

if __name__ == '__main__':
    app.run(debug=True)`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
