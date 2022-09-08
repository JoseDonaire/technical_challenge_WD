import './App.css';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import PhoneList from './components/PhoneList';
import PhoneDetails from './pages/PhoneDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
    <div id= 'phonePage'>
      <PhoneList/>

      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path = '/phones/:id' element = {<PhoneDetails/>}/>
        <Route path = '/*' element = {<NotFound/>}/>
      </Routes>

    </div>

    </div>
  );
}

export default App;
