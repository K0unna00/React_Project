import './RightBar.scss';
import Person1 from './Image.svg';
import Person2 from './Image (1).svg';
import Person3 from './Image (2).svg';
import Person4 from './Image (3).svg';
import Person5 from './Image (4).svg';
import SearchBtn from './search.svg';
export const RightBar = () => {
  return (
    <section className="rightbar">
      <div className="container">
        <div className="right-container">
          <div className="form">
            <form action="#">
              <input type="search" placeholder="Search here..." name="search" />
              <img src={SearchBtn} alt="SearchButton" />
            </form>
          </div>
          <div className="posts">
            <div className="posts-title">
              <h3>Latest Posts</h3>
            </div>
            <div className="post-content">
              <div className="content-box">
                <div className="post-img">
                  <img src={Person1} alt="PersonPhoto" />
                </div>
                <div className="post-title">
                  <span>Minimal Post With A Preview Image</span>
                </div>
              </div>
              <div className="content-box">
                <div className="post-img">
                  <img src={Person2} alt="PersonPhoto" />
                </div>
                <div className="post-title">
                  <span>Good Design Makes Me Happy</span>
                </div>
              </div>
              <div className="content-box">
                <div className="post-img">
                  <img src={Person3} alt="PersonPhoto" />
                </div>
                <div className="post-title">
                  <span>Best 27 Design Blogs for 2022</span>
                </div>
              </div>
              <div className="content-box">
                <div className="post-img">
                  <img src={Person4} alt="PersonPhoto" />
                </div>
                <div className="post-title">
                  <span>Creative Ways To Use Infographics For Your Business</span>
                </div>
              </div>
              <div className="content-box">
                <div className="post-img">
                  <img src={Person5} alt="PersonPhoto" />
                </div>
                <div className="post-title">
                  <span>Tumblr Banner Templates : Tips To Get Better Engagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
