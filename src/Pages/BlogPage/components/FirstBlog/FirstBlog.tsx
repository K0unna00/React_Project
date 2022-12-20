import './FirstBlog.scss';
import Image from './Image.svg';
import MessageCircle from './message-circle.svg';
import Person from './person.svg';
import Timer from './timer.svg';

interface IBlogProps {
  title: string;
  author: string;
  date: string;
  commentCount: number;
  text: string;
}
export const FirstBlog = (props: IBlogProps) => {
  const { title, author, date, commentCount, text } = props;
  return (
    <section className="first-blog">
      <div className="container">
        <div className="blog-container">
          <img src={Image} alt="" />
          <div className="blog-data">
            <div className="date">
              <img src={Timer} alt="" /> <span>{date}</span>
            </div>
            <div className="autor-name">
              <img src={Person} alt="" /> <span>{author}</span>
            </div>
            <div className="comments">
              <img src={MessageCircle} alt="" /> <span>{commentCount} comment</span>
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
