import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

import Accordion, {
  IAccordionItems,
} from '@/components/content/accordion/Accordion';
import Separator from '@/components/content/separator/Separator';

import { getDictionary } from '../../../../../dictionaries/getDictionary';
import ProjectDisplay from './ProjectDisplay';

export default async function ProjectsSection({ params }: Params) {
  const lang = await getDictionary(params.lang);

  const accordionItems: IAccordionItems[] = [
    {
      title: lang.projects.content['homework-lp'].title,
      content: (
        <ProjectDisplay
          name="homework-lp"
          path="https://homework-lp.vercel.app/"
          techs={['Next.js', 'TypeScript', 'TailwindCSS', 'React Aria']}
          lang={lang.projects}
        />
      ),
    },
  ];

  return (
    <section className="md:col-span-5 md:p-12 p-6 h-full w-full bg-gradient-to-tr from-gray-800 to-gray-900">
      <h3 className="text-3xl">{lang.projects.title}</h3>

      <Separator />

      <Accordion items={accordionItems} />
    </section>
  );
}
