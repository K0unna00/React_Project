import "./TeamMember.scss"
import mate1 from  "./teamMate1.png"
import mate2 from  "./teamMate2.png"
import mate3 from  "./teamMate3.png"
import mate4 from  "./teamMate4.png"
import { MemberCard } from "../MemberCard/MemberCard"

export const TeamMember=()=>{
    return(
        <section className="team-members">
            <div className="container">
                <div className="subtitle">
                    Team Member
                </div>
                <div className="title">
                    We Have <br /> <span>Some Awesome</span> People
                </div>
                <div className="members">
                    <MemberCard image={mate1} name="Vladimir Putin" position="UI/UX Designer"/>
                    <MemberCard image={mate2} name="ProstaKisi" position="UI/UX Designer"/>
                    <MemberCard image={mate3} name="Anton Efremenkov" position="UI/UX Designer"/>
                    <MemberCard image={mate4} name="Kisi DaVqin Abdulla" position="AliBasKomandan"/>
                </div>
            </div>
        </section>
    )
}