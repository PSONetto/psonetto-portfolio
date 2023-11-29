import Accordion, {
  IAccordionItems,
} from '@/components/content/accordion/Accordion';
import Separator from '@/components/content/separator/Separator';

import ProjectDisplay from './ProjectDisplay';

export default function ProjectsSection() {
  const accordionItems: IAccordionItems[] = [
    {
      title: 'Homework Institutional Website',
      content: (
        <ProjectDisplay
          name="homework-lp"
          path="https://homework-lp.vercel.app/"
          techs={['Next.js', 'TypeScript', 'TailwindCSS', 'React Aria']}
        />
      ),
    },
  ];

  return (
    <section className="md:col-span-5 md:p-12 p-6 h-full w-full bg-gradient-to-tr from-gray-800 to-gray-900">
      <h3 className="text-3xl">Most Recent Projects</h3>

      <Separator />

      <Accordion items={accordionItems} />
    </section>
  );
}
