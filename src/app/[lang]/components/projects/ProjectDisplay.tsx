import { FaExternalLinkAlt } from 'react-icons/fa';

import ProjectPreview from './ProjectPreview';
import TechTag from './TechTag';

export interface IProjectDisplayProps {
  name: string;
  path: string;
  techs: string[];
  lang: any;
}

export default function ProjectDisplay({
  name,
  path,
  techs,
  lang,
}: IProjectDisplayProps) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <a
        href={path}
        target="_blank"
        className="flex items-center justify-center gap-2 text-lg transition ease-in-out duration-500 hover:scale-105"
      >
        <span>{lang.visit}</span>
        <FaExternalLinkAlt />
      </a>

      <ProjectPreview name={name} path={path} />

      <div className="flex flex-wrap items-center justify-center gap-2">
        {techs.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>
    </div>
  );
}
