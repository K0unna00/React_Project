import { Projects } from "./components/Projects/Projects";
import { AboutUs } from './components/AboutUs/AboutUs';
import { ClientsFeedback } from './components/ClientsFeedback/ClientsFeedback';
import { ContactUs } from './components/ContactUs/ContactUs';
import { Hero } from './components/Hero/Hero';
import { TeamMember } from './components/TeamMember/TeamMember';

      <Projects />
export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <AboutUs />
      <TeamMember />
      <ClientsFeedback />
      <ContactUs />
    </div>
  );
};
