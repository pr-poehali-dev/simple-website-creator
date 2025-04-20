
interface TechCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const TechCard = ({ title, description, imagePath }: TechCardProps) => {
  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 hover:scale-105">
      <img 
        src={imagePath} 
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
