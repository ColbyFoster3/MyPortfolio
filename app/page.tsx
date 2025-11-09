import Image from 'next/image';
import ExperiencesPage from './experiences/page';

export default function HomePage() {
  return (
    <section key="home-page">
      <div className="grid grid-cols-1 gap-6">
        <div key="introduction" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="hidden md:flex w-full mx-auto justify-center">
            <Image
              src="/images/profile-picture.jpeg"
              alt="Profile picture"
              className="rounded-full object-cover aspect-square w-full max-w-[300px] lg:max-w-[300px] h-auto"
              width="400"
              height="400"
              priority
            />
          </div>
          <div className="content-center">
            <h2 className="text-3xl font-bold">Hi, I'm Colby 👋</h2>
            <p className="mt-2 text-lg">
              I'm a Software Engineer dedicated on building full web experiences to meet client's dreams.
            </p>
          </div>
        </div>
        <div key="about-me" className="grid grid-cols-1 gap-6 mb-6">
          <p>
            Currently, I'm a Software Engineer employed 
            at <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.introhive.com/">Introhive</a> focusing
            on improving client's data and their daily workflows. I work on automating and improving the quality of client's data in CRM. This enables higher
            confidence in their data enabling them to make informed business decisions. My work varies between frontend and backend which I enjoy as it 
            always surfaces new challenges for me to tackle.
          </p>
          <p>
            I have been lucky enough to work in a variety of settings including construction, retail, and technology. My roles in client facing positions has empowered
            me to be client driven first over everything. I bring this mindset with me everyday to ensure we are doing the correct work to provide tangible value to clients.
          </p>
          <p>
            Outside of work, you can find me spending time with my fiancée and two dogs, working on our property, and jamming to all sorts of music!
          </p>
        </div>
        <ExperiencesPage key="experiences"/>
      </div>
    </section>
  );
}
