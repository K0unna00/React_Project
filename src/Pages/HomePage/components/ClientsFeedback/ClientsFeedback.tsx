import './ClientsFeedback.scss';
import { CarouselCard } from '../CarouselCard/CarouselCard';
import { useState } from 'react';
import PP1 from './pp1.png';
import PP2 from './pp2.png';

export const ClientsFeedback = () => {
  let [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const buttonClickerHandler = (number: number): void => {
    setCurrentSlideNumber((currentSlideNumber = number));
  };
  return (
    <section className="clientsFeedback">
      <div className="container">
        <div className="subtitle">Clinets Feedback</div>
        <div className="title">
          Some{' '}
          <span>
            Great <br /> Words
          </span>{' '}
          From Our Clients
        </div>
        <div className="slider">
          <CarouselCard
            name="Justin Septimus"
            position="CEO,word yt"
            img={PP1}
            marginLeft={`${-660 * currentSlideNumber + 40}px`}
          />
          <CarouselCard name="Ashlynn Gouse" position="Managing Director" img={PP2} />
          <CarouselCard name="1" position="CEO,word yt" img={PP1} />
          <CarouselCard name="2" position="CEO,word yt" img={PP2} />
        </div>
        <div className="buttons">
          <button
            className={currentSlideNumber === 0 ? 'active' : ''}
            onClick={() => buttonClickerHandler(0)}
          ></button>
          <button
            className={currentSlideNumber === 1 ? 'active' : ''}
            onClick={() => buttonClickerHandler(1)}
          ></button>
          <button
            className={currentSlideNumber === 2 ? 'active' : ''}
            onClick={() => buttonClickerHandler(2)}
          ></button>
        </div>
      </div>
    </section>
  );
};