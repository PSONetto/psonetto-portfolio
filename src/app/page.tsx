import PresentationSection from './components/presentation/PresentationSection';
import ProjectsSection from './components/projects/ProjectsSection';

export default function Home() {
  return (
    <main className="flex flex-col md:flex-none md:grid md:grid-cols-12 min-h-screen items-center justify-between p-0">
      <PresentationSection />
      <ProjectsSection />
    </main>
  );
}
