import './ClientsFeedback.scss';
import { CarouselCard } from '../CarouselCard/CarouselCard';
import { RootState } from '../../../../modules/redux/store';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import PP1 from './pp1.png';

export const ClientsFeedback = () => {
  let [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const { feedbacks } = useSelector((state: RootState) => state.feedback);

  console.log(feedbacks);

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
          {feedbacks.map((item, index) => {
            return (
              <CarouselCard
                name={item.name}
                position={item.position}
                img={PP1}
                marginLeft={`${-660 * currentSlideNumber + 40}px`}
              />
            );
          })}
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
