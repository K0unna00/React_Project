import './FirstBlog.scss';
import MessageCircle from './message-circle.svg';
import Person from './person.svg';
import Timer from './timer.svg';

interface IBlogProps {
  title: string;
  author: string;
  date: string;
  commentCount: number;
  text: string;
  image: string;
}
export const FirstBlog = (props: IBlogProps) => {
  const { title, author, date, commentCount, text, image } = props;
  return (
    <section className="first-blog">
      <div className="container">
        <div className="blog-container">
          <img src={image} alt="BlogImage" />
          <div className="blog-data">
            <div className="date">
              <img src={Timer} alt="TimerIcon" /> <span>{date}</span>
            </div>
            <div className="autor-name">
              <img src={Person} alt="PersonPhoto" /> <span>{author}</span>
            </div>
            <div className="comments">
              <img src={MessageCircle} alt="MessageCircleIcon" /> <span>{commentCount} comment</span>
            </div>
          </div>
          <div className="text">
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};
