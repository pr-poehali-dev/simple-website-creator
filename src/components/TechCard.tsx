
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TechCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const TechCard = ({ title, description, imagePath }: TechCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video w-full overflow-hidden bg-python-blue/10">
        <img
          src={imagePath}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-python-blue">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {title === "Django" && (
            <>
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                ORM
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                Admin
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                Auth
              </span>
            </>
          )}
          {title === "Flask" && (
            <>
              <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Гибкость
              </span>
              <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                Расширения
              </span>
              <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800">
                Простота
              </span>
            </>
          )}
          {title === "FastAPI" && (
            <>
              <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                Скорость
              </span>
              <span className="rounded-full bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800">
                Swagger
              </span>
              <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                Асинхронность
              </span>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default TechCard;
