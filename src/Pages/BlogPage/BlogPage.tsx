import './BlogPage.scss';
import { BlogHero } from './components/BlogHero/BlogHero';
import { FirstBlog } from './components/FirstBlog/FirstBlog';
import { RightBar } from './components/RightBar/RightBar';
import { RootState } from '../../modules/redux/store';
import { baseURL } from '../../constants';
import { blogPageSlice } from './redux/blogPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const BlogPage = () => {
  useEffect(() => {
    fetch(`${baseURL}/blog`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(blogPageSlice.actions.setBlog(data));
      });
  }, []);
  const dispatch = useDispatch();
  const { blogs } = useSelector((state: RootState) => state.blog);

  return (
    <div className="blog">
      <BlogHero />
      <div className="blog-content">
        <div className="map">
          {blogs.map((blog) => (
            <FirstBlog
              key={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              commentCount={blog.commentCount}
              text={blog.text}
            />
          ))}
        </div>
        <RightBar />
      </div>
    </div>
  );
};
