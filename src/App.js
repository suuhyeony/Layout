import { Route, Routes, Navigate } from 'react-router-dom';
import Mobile from './pages/Mobile';
import Web from './pages/Web';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate replace to="/web"/>} />
        <Route path="/web" element={<Web />} />
        <Route path="/mobile" element={<Mobile />} />
      </Routes>
    </div>
  );
}

export default App;
