import Link from 'next/link';

export interface ILangToggleProps {
  lang: string;
}

export default function LangToggle({ lang }: ILangToggleProps) {
  let label: string;
  let aria: string;

  switch (lang) {
    case 'pt':
      label = 'EN';
      aria = 'english';
      break;
    case 'en':
      label = 'PT';
      aria = 'portuguese';
      break;
    default:
      label = 'PT';
      aria = 'portuguese';
  }
  return (
    <Link
      href={`/${label.toLowerCase()}`}
      className="text-lg rounded p-2 bg-slate-900 transition ease-in-out duration-500 hover:scale-105"
      aria-label={aria}
    >
      {label}
    </Link>
  );
}
