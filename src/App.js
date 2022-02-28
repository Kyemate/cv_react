import './style/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/NavComp';
import PopUp from './Components/PopUp';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Pdf from './Pages/Pdf';
import Projects from './Pages/Projects';

export default function App() {
  return (
    <Router basename="/react_cv/">
     <NavComp></NavComp>
     <PopUp></PopUp>
     <Routes>
       <Route path='/react_cv/' element={ <Home /> }/>
       <Route path='/react_cv/projects' element={<Projects/> }/>
       <Route path='/react_cv/contact' element={ <Contact /> }/>
       <Route path='/react_cv/pdf' element={ <Pdf /> }/>
     </Routes>
    </Router>
  );
}