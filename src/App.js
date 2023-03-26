
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Footer from "./components/footer/Footer";
import AboutPage from "./pages/AboutPage/AboutPage";
import Header from "./components/header/Header"
import './App.css'



function App() {
  return (
   <>
   <Header/>
      <Routes>
          <Route index element={<MainPage/>}/>
          <Route path='/about/:id' element={<AboutPage/>}/>
      </Routes>
    <Footer/>
   </>
    
  );
}

export default App;
