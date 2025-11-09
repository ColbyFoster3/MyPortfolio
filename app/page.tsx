import Image from 'next/image';
import ExperiencesPage from './experiences/page';
import AboutMe from './about/about-me';
import Introduction from './about/introduction';

export default function HomePage() {
  return (
    <section key="home-page">
      <div className="grid grid-cols-1 gap-6">
        <Introduction key="introduction" />
        <AboutMe key="about" />
        <ExperiencesPage key="experiences"/>
      </div>
    </section>
  );
}
