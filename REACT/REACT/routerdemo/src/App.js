import { Link, NavLink, Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import Labs from './components/Labs';
import About from './components/About';
import Main from './components/Main';

function App() {
  return (

    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
            </li>
          <li>
            <NavLink to="/support">Support</NavLink>
            </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
            </li>

        </ul>
      </nav>
      <Routes>
          <Route path='/' element={<Main/>}>
          {/**Default page ==Home page given by index */}
          <Route index element={<Home/>}/>
          <Route path='/support' element={<Support/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Labs' element={<Labs/>}/>
          <Route path='*' element={<div>Not Found</div>}/>
          </Route>
          
      </Routes>
    </div>
  );
}

export default App;
