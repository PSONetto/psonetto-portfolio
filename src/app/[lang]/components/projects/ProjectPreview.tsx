'use client';

import Image from 'next/image';

export interface IProjectPreviewProps {
  name: string;
  path: string;
}

export default function ProjectPreview({ name, path }: IProjectPreviewProps) {
  return (
    <a href={path} target="_blank" className="shadow-lg w-full">
      <Image
        alt={name}
        src={`/assets/screenshots/${name}.png`}
        className="w-auto"
        height={800}
        width={1280}
        sizes="(max-width: 768px) 80vw, 33vw"
      />
    </a>
  );
}
