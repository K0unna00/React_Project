import './App.css';
import { AboutUs } from './Pages/HomePage/components/AboutUs/AboutUs';
import { BlogPage } from './Pages/BlogPage/BlogPage';
import { Footer } from './Pages/Footer/Footer';
import { Header } from './Pages/Header/Header';
import { Home } from './Pages/HomePage/Home';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Profile } from './Pages/Profile/Profile';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-blog" element={<BlogPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
