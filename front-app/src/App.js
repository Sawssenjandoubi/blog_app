import Navbarr from './navbar/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './home/Home';
import Blog from './blogs/Blog';
import Register from './Register/Register';


function App() {
  return (
    <div className="App">
      <Navbarr/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Blog" element={<Blog />} />
        <Route path="register" element={<Register />} />

      </Routes>

    </div>
  );
}

export default App;
