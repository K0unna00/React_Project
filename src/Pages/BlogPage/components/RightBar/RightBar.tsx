import './RightBar.scss';
import SearchBtn from './search.svg';

export const RightBar = () => {
  return (
    <section className="rightbar">
      <div className="container">
        <div className="right-container">
          <div className="form">
            <form action="#">
              <input type="search" placeholder="Search here..." name="search" />
              <img src={SearchBtn} alt="" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
