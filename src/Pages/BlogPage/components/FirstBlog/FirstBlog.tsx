import Image from './Image.svg';
import Timer from './timer.svg';
import Person from './person.svg';
import MessageCircle from './message-circle.svg';
import './FirstBlog.scss';


export const FirstBlog = () => {
  return (
    <section className="first-blog">
      <div className="container">
        <div className="blog-container">
          <img src = {Image} alt="" />
          <div className="blog-data">
            <div className="date">
                <img src = {Timer} alt="" /> <span>January 25, 2021</span>
            </div>
            <div className="autor-name">
                <img src = {Person} alt="" /> <span>Cristofer Westervelt</span>
            </div>
            <div className="comments">
                <img src = {MessageCircle} alt="" /> <span>10 Comment</span>
            </div>
          </div>
          <div className="text">
          <h1>
            35 Stellar Graphic Design Blogs to Keep You Educated and Inspired
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
            facilisi sed tincidunt mauris duis pulvinar convallis eu. Lobortis
            scelerisque aliquam massa arcu, eget. Sociis odio quis eget lacus.
            Dolor at enim viverra laoreet molestie amet cursus et. Sed lacus,
            viverra lacinia scelerisque cras aliquam blandit.
          </p>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};
