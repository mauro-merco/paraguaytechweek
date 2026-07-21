import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import About from './components/About';
import Speakers from './components/Speakers';
import Panels from './components/Panels';
import Agenda from './components/Agenda';
import Benefits from './components/Benefits';
import Venue from './components/Venue';
import Registration from './components/Registration';
import Organizers from './components/Organizers';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <About />
        <Speakers />
        <Panels />
        <Agenda />
        <Benefits />
        <Venue />
        <Registration />
        <Organizers />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
