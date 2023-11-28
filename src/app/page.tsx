import PresentationSection from './PresentationSection';

export default function Home() {
  return (
    <main className="grid grid-cols-12 min-h-screen items-center justify-between px-12 py-24">
      <PresentationSection></PresentationSection>
      <div className="cols-span-5 p-6">Projects</div>
    </main>
  );
}
