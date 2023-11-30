import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Separator from '@/components/content/separator/Separator';

import { getDictionary } from '../../../../getDictionary';
import LangToggle from './LangToggle';
import LinkTooltip from './LinkTooltip';
import SocialMediaLink from './SocialMediaLink';

export interface ISocialMediaLink {
  icon: React.ReactNode;
  path: string;
  name: string;
}

export default async function PresentationSection({ params }: any) {
  const lang = await getDictionary(params.lang);

  const links: ISocialMediaLink[] = [
    {
      icon: <FaGithub />,
      path: 'https://github.com/PSONetto/',
      name: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      path: 'https://www.linkedin.com/in/plinio-netto/',
      name: 'Linkedin',
    },
  ];

  const description = { __html: String(lang.presentation.description) };

  return (
    <section className="md:col-span-7 md:p-12 p-6 h-full flex flex-col gap-28 bg-gradient-to-tr from-black to-gray-950">
      <div className="flex items-center justify-between w-full">
        <LangToggle lang={params.lang} />
        <div className="flex items-center justify-center gap-2">
          {links.map((link) => {
            return (
              <SocialMediaLink
                key={link.name}
                icon={link.icon}
                path={link.path}
                tooltip={<LinkTooltip name={link.name} />}
                delay={300}
              />
            );
          })}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="cursor-default transition origin-bottom ease-in-out duration-500 hover:scale-105">
          <h1 className="text-5xl font-bold">
            <strong>{lang.presentation.name}</strong>
          </h1>
          <h2 className="text-3xl">
            <strong>{lang.presentation.subTitle}</strong>
          </h2>
        </div>

        <Separator />

        <div
          className="text-lg text-justify cursor-default transition origin-top ease-in-out duration-500 hover:scale-105"
          dangerouslySetInnerHTML={description}
        />
      </div>
    </section>
  );
}
