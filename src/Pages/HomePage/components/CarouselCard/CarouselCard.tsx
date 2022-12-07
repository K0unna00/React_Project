interface ICaroulseCard {
  name: string;
  position: string;
  img: string;
  marginLeft?: string;
}

export const CarouselCard = (props: ICaroulseCard) => {
  const { name, position, img, marginLeft } = props;
  return (
    <div className="card" style={marginLeft ? { marginLeft: marginLeft } : {}}>
      <div className="content">
        <div className="name">{name}</div>
        <div className="position">{position}</div>
        <div className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit a laoreet libero dis eget maecenas
          bibendum. Morbi lacinia eu, etiam volutpat morbi et amet, sagittis adipiscing.
        </div>
      </div>
      <img src={img} alt="" className="pp" />
    </div>
  );
};

