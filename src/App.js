import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Resume from './Pages/Resume/Resume';
import Services from './Pages/Services/Services';
import Pricing from './Pages/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/skills' element={<Skills></Skills>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
