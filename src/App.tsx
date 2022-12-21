import './App.css';
import { BlogPage } from './Pages/BlogPage/BlogPage';
import { Footer } from './Pages/Footer/Footer';
import { Header } from './Pages/Header/Header';
import { Home } from './Pages/HomePage/Home';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { RegisterPage } from './Pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import { Profile } from './Pages/Profile/Profile';
import { AboutUs } from './Pages/HomePage/components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
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
