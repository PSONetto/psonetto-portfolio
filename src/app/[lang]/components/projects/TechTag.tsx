export interface ITechTagProps {
  name: string;
}

export default function TechTag({ name }: ITechTagProps) {
  return (
    <span className="p-1 bg-gray-950 rounded cursor-default transition ease-in-out duration-500 hover:scale-105">
      {name}
    </span>
  );
}
