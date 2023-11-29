import Image from 'next/image';

export interface IProjectDisplayProps {
  name: string;
}

export default function ProjectDisplay({ name }: IProjectDisplayProps) {
  return (
    <div>
      <Image alt={name} src={`/assets/screenshots/${name}.png`} />
    </div>
  );
}
