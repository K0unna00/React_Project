import "./ContactCard.scss";

interface IContactCardProps{
    logo: string;
    mainHeader: string;
    subHeader: string;
    description: string;
    secondDescription?: string;
}

export const ContactCard = (props: IContactCardProps) => {
    const {logo, mainHeader, subHeader, description, secondDescription} = props;

    return(
        <div className="contact-item">
            <div className="top-part">
                <img src={ logo } alt="logo"/>
                <div className="item-headers">
                    <h4 className="main-header orange">{ mainHeader }</h4>
                    <h3 className="sub-header">{ subHeader }</h3>
                </div>
            </div>
            <div className="bottom-part">
                <h5 className="description grey">{ description }</h5>
                <h5 className="second-description grey">{ secondDescription }</h5>
            </div>
        </div>
    );
};