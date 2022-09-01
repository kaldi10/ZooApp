import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home';
import Animals from './Animals';
import AnimalPage from './AnimalPage';
import EditAnimal from './EditAnimal';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <>
    <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/animals" element={<Animals />}></Route>
        </Routes>
        <Routes>
          <Route path="/animal_page" element={<AnimalPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/edit_animal" element={<EditAnimal />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
