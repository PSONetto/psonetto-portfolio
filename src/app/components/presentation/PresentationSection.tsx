import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Separator from '@/components/content/separator/Separator';

import LinkTooltip from './LinkTooltip';
import SocialMediaLink from './SocialMediaLink';

export interface ISocialMediaLink {
  icon: React.ReactNode;
  path: string;
  name: string;
}

export default function PresentationSection() {
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

  return (
    <section className="md:col-span-7 md:p-12 p-6 h-full flex flex-col gap-28 bg-gradient-to-tr from-black to-gray-950">
      <div className="flex flex-row-reverse w-full gap-2">
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

      <div className="flex flex-col">
        <div className="cursor-default transition origin-bottom ease-in-out duration-500 hover:scale-105">
          <h1 className="text-5xl font-bold">
            <strong>Plinio Netto</strong>
          </h1>
          <h2 className="text-3xl">
            <strong>Fullstack Web Developer</strong>
          </h2>
        </div>

        <Separator />

        <div className="text-lg text-justify cursor-default transition origin-top ease-in-out duration-500 hover:scale-105">
          Welcome to my digital realm!
          <br /> I&apos;m <i>Plinio Netto</i>, a <i>full-stack web developer</i>{' '}
          based in Brazil, specialized in <i>React.js, Node.js and Next.js</i>.
          With a passion for crafting seamless web experiences, I bring together
          innovation and expertise. Explore my portfolio, where I bring{' '}
          <i>fancy solutions</i> combined with <i>full responsiveness</i> and
          special care for <i>accessibility</i> and <i>user experience</i>!
        </div>
      </div>
    </section>
  );
}
