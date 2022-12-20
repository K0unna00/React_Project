import { FirstBlog } from './components/FirstBlog/FirstBlog';
import { baseURL } from '../../constants';
import { useEffect } from 'react';
import { BlogHero } from './components/BlogHero/BlogHero';

export const BlogPage = () => {
  // useEffect(() => {
  //   fetch(`${baseURL}/blogs`)
  //   .then(response => response.json())
  //   .then(.......)
  // }, []);
  ////// Elnare burda son 'then'-den davam elmelisen :)

  return (
    <div className="blog">
      <BlogHero />
      <FirstBlog />
    </div>
  );
};
