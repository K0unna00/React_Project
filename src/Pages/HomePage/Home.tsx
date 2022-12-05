import { AboutUs } from "./components/AboutUs/AboutUs"
import { ContactUs } from "./components/ContactUs/ContactUs"
import { Hero } from "./components/Hero/Hero"
import { TeamMember } from "./components/TeamMember/TeamMember"

export const Home=()=>{
    return(
        <div className="home">
            <Hero />
            <AboutUs />
            <TeamMember />
            <ContactUs />
        </div>
    )
}