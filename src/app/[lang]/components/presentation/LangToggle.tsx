'use client';

import Link from 'next/link';

export interface ILangToggleProps {
  lang: string;
}

export default function LangToggle({ lang }: ILangToggleProps) {
  let label: string;

  switch (lang) {
    case 'pt':
      label = 'EN';
      break;
    case 'en':
      label = 'PT';
      break;
    default:
      label = 'PT';
  }
  return (
    <Link
      href={`/${label.toLowerCase()}`}
      className="text-lg rounded p-2 bg-slate-900 transition ease-in-out duration-500 hover:scale-105"
    >
      {label}
    </Link>
  );
}
