import { BlogHero } from './components/BlogHero/BlogHero';
import { FirstBlog } from './components/FirstBlog/FirstBlog';
import { RootState } from '../../modules/redux/store';
import { baseURL } from '../../constants';
import { blogPageSlice } from './redux/blogPageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const BlogPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`${baseURL}/blogs`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
        dispatch(blogPageSlice.actions.setBlog(data));
      });
  }, []);
  const { blogs } = useSelector((state: RootState) => state.blog);
  // console.log(blogs);

  return (
    <div className="blog">
      <BlogHero />
      {blogs.map((blog) => (
        <FirstBlog
          title={blog.title}
          author={blog.author}
          date={blog.date}
          commentCount={blog.commentCount}
          text={blog.text}
        />
      ))}
    </div>
  );
};
