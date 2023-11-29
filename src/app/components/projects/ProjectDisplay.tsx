import { FaExternalLinkAlt } from 'react-icons/fa';

import Image from 'next/image';

import TechTag from './TechTag';

export interface IProjectDisplayProps {
  name: string;
  path: string;
  techs: string[];
}

export default function ProjectDisplay({
  name,
  path,
  techs,
}: IProjectDisplayProps) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <a
        href={path}
        target="_blank"
        className="flex items-center justify-center gap-2 text-lg transition ease-in-out duration-500 hover:scale-105"
      >
        <span>Visit</span>
        <FaExternalLinkAlt />
      </a>

      <a href={path} target="_blank" className="shadow-lg">
        <Image
          alt={name}
          src={`/assets/screenshots/${name}.png`}
          className="w-auto"
          height={800}
          width={1280}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </a>

      <div className="flex items-center justify-center gap-2">
        {techs.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}
