
import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/HomePage/Home';
import { Footer } from './Pages/Footer/Footer';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="  />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <main>
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
