import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

const App = () =>{

 return (
   <Routes>
     <Route path="/" index element={<Home />} />
   </Routes>
 );
}
export default App;
