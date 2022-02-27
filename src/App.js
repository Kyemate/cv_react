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
  


//   function keyEasterEgg() {
//      window.addEventListener( 'keypress', (function() {
//       var strToType = '123',
//           strTyped = '';
//       return function( event ) {
//           var character = String.fromCharCode(event.which);
//           strTyped += character;
//           if (strToType.indexOf(strTyped) === -1) strTyped = '';
//           else if (strTyped === strToType) {
//               strTyped = '';
//               alert('activate easteregg here');
//           }
//       };
//   }()));
// }

  return (
    <Router>
     <NavComp></NavComp>
     <PopUp></PopUp>
     <Routes>
       <Route path='/' element={ <Home /> }/>
       <Route path='projects' element={<Projects/> }/>
       <Route path='/contact' element={ <Contact /> }/>
       <Route path='/pdf' element={ <Pdf /> }/>
     </Routes>
    </Router>
  );
}