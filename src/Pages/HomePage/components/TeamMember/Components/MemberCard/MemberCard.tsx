interface MemberProp{
    image:string,
    name:string,
    position:string
}


export const MemberCard = (props:MemberProp) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt="" />
                <ul className="media">
                    <li><i className="fa-brands fa-facebook"></i></li>
                    <li><i className="fa-brands fa-instagram"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
                    <li><i className="fa-brands fa-skype"></i></li>
                </ul>
            </div>
            <div className="name">
                {props.name}
            </div>
            <div className="position">
                {props.position}
            </div>
        </div>
    )
}