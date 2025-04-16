import './App.css';
import { Route,Routes } from 'react-router-dom';
import UseEffect1 from './UesEffect';
import RouterTest from './RouterTest';

function App() {
  return (
    <>
    <Routes>
      <Route path = '/' element = {<RouterTest></RouterTest>}></Route>
    </Routes>
    </>
  );
}

export default App;
