import './App.css';
import FileSubmit from './components/FileSubmit';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={
        <FileSubmit />
      }/>
    </Routes>
  );
}

export default App;
