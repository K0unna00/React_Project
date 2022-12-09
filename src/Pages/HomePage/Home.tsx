import { ContactUs } from "./components/ContactUs/ContactUs";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { TeamMember } from "./components/TeamMember/TeamMember";

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Projects />
      <TeamMember />
      <ContactUs />
    </div>
  );
};
